import React, {Component} from 'react'
import {Link} from "react-router-dom";
import MoviePrototype from "./MoviePrototype";
import NewMovies from "./NewMovies";
import {profile} from "../../services/UserService";
import {findReviewsByUser} from "../../services/ReviewService";
import {findMovieById} from "../../services/MovieService";
import ReviewedMovie from "./ReviewedMovie";

class HomeHeading extends Component{
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

        if (this.props.match.params.latestTitleSearch) {
            this.setState({
                titleSearch : this.props.match.params.latestTitleSearch
            })
        }

        await profile()
            .then(profile => this.setState({
                profile: profile
            })).catch(ErrorEvent => ErrorEvent);

        await findReviewsByUser(this.state.profile.id)
            .then(reviews => this.setState({
                reviews: reviews
            }));

        await findReviewsByUser(this.state.profile.id)


    };
    findMovieById = async (movieId) => {
        await findMovieById(movieId)
            .then(movie => console.log(movie.title)).toString()
}
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.latestTitleSearch !== this.props.match.params.latestTitleSearch) {
            this.setState({
                titleSearch : this.props.match.params.latestTitleSearch
            })
        }
    }

    render() {
        return (
            <div className={"homepage"}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to={`/`} className={"col-2"}>
                        <img className={"douban navbar-brand "} src={"https://upload.wikimedia.org/wikipedia/commons/a/aa/Douban_logo.svg"}/>
                    </Link>
                    <input
                        onChange={e => this.setState({
                            titleSearch: e.target.value
                        })}
                        value={this.state.titleSearch}
                        onKeyDown={(e) =>  {
                            if (e.keyCode === 13) {
                                this.props.history.push(`/movies/${this.state.titleSearch}`)
                            }
                        }}
                        className="form-control col-7 mr-sm-2" type="search" placeholder="Search Movie Title"
                           aria-label="Search"/>
                    <button
                        onClick={() => this.props.history.push(`/movies/${this.state.titleSearch}`)}
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit">Search</button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                {/*<a className="nav-link" href="#">Login <span className="sr-only">(current)</span></a>*/}
                            </li>
                        </ul>
                    </div>
                    <div>
                        {this.state.profile.username &&
                        <Link to={`/profile`}>
                            <i className="fas fa-user"/>
                            {this.state.profile.username}</Link>}
                        {!this.state.profile.username && <Link to={`/login`}>Login</Link>}
                    </div>
                </nav>

                {this.state.profile.username &&
                <div className={"row"}>
                    <div className={"col-8"}>
                        {this.props.match.path === `/` &&
                        <NewMovies/>
                        }
                        {this.props.match && this.props.match.params && this.props.match.params.latestTitleSearch &&
                        <MoviePrototype
                            history = {this.props.history}
                            latestTitleSearch={this.props.match.params.latestTitleSearch}/>}
                    </div>
                    <div className={"col-4"}>
                        <br/>
                        {!this.state.profile.username}
                        {this.state.profile.username &&
                        <div>
                            <h2 className={"now-playing"}>Movies Reviewed</h2>
                            <ReviewedMovie reviews={this.state.reviews}/>
                        </div>
                        }

                    </div>
                </div>}
                {!this.state.profile.username &&
                <div className={"container new-movie-width"}>
                    {this.props.match.path === `/` &&
                    <NewMovies/>
                    }
                    <div className={"col-11"}>
                        {this.props.match && this.props.match.params && this.props.match.params.latestTitleSearch &&
                        <MoviePrototype
                            history = {this.props.history}
                            latestTitleSearch={this.props.match.params.latestTitleSearch}/>}
                    </div>
                </div>
                }
                <div className={"float-right footnote"}>
                    <a href={"/privacy"}>
                        Privacy Policy
                    </a>
                </div>
            </div>
        )
    }
}

export default HomeHeading