import React, {Component} from 'react'
import {findReviewsByUser} from "../services/ReviewService";
import AnonymousEachReviewedMovie from "./AnonymousEachReviewedMovie";

export default class AnonymousReview extends Component{
    constructor(props){
        super(props);
        this.state = {
            titleSearch: '',
            profile: {},
            reviews: [],
            title: '',
            movie: [],
            moviesIds: []
        }
    };

    componentDidMount = async () => {
        await findReviewsByUser(this.props.userId)
            .then(reviews => this.setState({
                reviews: reviews
            }));
    };

    render() {
        return(
            <div>
                {console.log(this.state.reviews)}
                {this.state.reviews && this.state.reviews.reverse().map(review =>
                    <div>
                        <div className={"card"}>
                            <div className={"row"}>
                                <div>
                                    <AnonymousEachReviewedMovie key={review.movieId} mid={review.movieId} review={review.review}/>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>

                    )}
                {/*<ReviewedMovie reviews={this.state.reviews}/>*/}
            </div>
        )
    }
}