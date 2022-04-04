import React, {Component} from 'react'
import {findUserById, findUserByReview, profile} from "../../services/UserService";
import {Link} from "react-router-dom";
import {deleteReview, findAllReviews, post} from "../../services/ReviewService";

class NewPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            profile: {},
            review: '',
            allReviews: [],
            test: 'norender'
        }
    }
    componentDidMount() {
        profile()
            .then(profile => this.setState({
                profile: profile
            })).catch(ErrorEvent => ErrorEvent);

        findAllReviews(this.props.movieId)
            .then(reviews => this.setState({
                allReviews : reviews
            })).catch(ErrorEvent => ErrorEvent);

    }
    postReview =  async (review, uid) => {
        await post(review, uid);
    };

    deleteReview = async (rid) => {
        await deleteReview(rid);
        await findAllReviews(this.props.movieId)
            .then(reviews => this.setState({
                allReviews : reviews
            }));
    };

    render() {
        return (
            <div className={"container"}>
                <br/>
                <h1>User Reviews</h1>
                <div>
                    {this.state.allReviews &&
                    this.state.allReviews.map(review =>
                        <div key={review.id} className="card">
                            <div className="card-header">
                                <Link to={`/profile/${review.username}`}>
                                    {review.username}
                                </Link>
                                {this.state.profile.role === 'ADMIN' &&
                                <div className={"float-right"}>
                                    <i
                                        onClick={() => this.deleteReview(review.id)}
                                        className={"fas fa-times"}/>
                                </div>}
                                <div className={"timestamp float-right"}>
                                    {review.timestamp}
                                </div>

                            </div>
                            <div className="card-body">
                                <p className="card-text">{review.review}</p>
                            </div>
                        </div>)}
                </div>
                <br/>
                <div>
                    {!this.state.profile.username && <Link to={`/login`}>Sign in to write reviews</Link>}
                    {this.state.profile.username && this.state.profile.role !== 'ADMIN' &&
                        <form>
                            <div >
                                <div className="form-group row">
                                <textarea
                                    rows={5}
                                    placeholder={"Start your reviews..."}
                                    onChange={e => this.setState({review : e.target.value})}
                                    className="col-sm-11">
                                </textarea>
                                </div>
                                <div  className={"float-right"}>
                                    <button
                                        onClick={() => this.postReview({review: this.state.review, movieId: this.props.movie.id, username: this.state.profile.username, timestamp: (new Date()).toLocaleDateString() + " " + (new Date().toLocaleTimeString())}, this.state.profile.username)}
                                        className={"btn btn-primary pst"}>Post</button>
                                </div>
                            </div>
                        </form>
                    }
                </div>

            </div>
        )
    }
}

export default NewPost