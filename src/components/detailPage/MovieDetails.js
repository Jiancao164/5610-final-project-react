import React from "react";
import NewPost from "./NewPost";
import {Link} from "react-router-dom";

export default class MovieDetails extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        const movie_id = this.props.match.params.movie_id;
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=96bf64810bb08ac090ee8a60602af234`, {
        }).then(response => response.json())
            .then(movie => this.setState({
                movie: movie
            }));


        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=96bf64810bb08ac090ee8a60602af234`, {
        }).then(response => response.json())
            .then(moreInfo => this.setState({
                moreInfo: moreInfo
            }))
    }

    state = {
        movie: {},
        moreInfo: {}
    };
    render() {
        return(
            <div  className={"container"}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <Link to={`/`}>
                        <img className={"douban col-3"} src={"https://upload.wikimedia.org/wikipedia/commons/a/aa/Douban_logo.svg"}/>
                    </Link>

                    {/*<h1 className="navbar-brand col-7">{this.state.movie && this.state.movie.title}</h1>*/}
                </nav>
                <div className={"row"}>
                    <div className={"col-9"}>
                        <br/>
                        {this.state.moreInfo && this.state.moreInfo.results && this.state.moreInfo.results[0] &&
                        <iframe src={`http://www.youtube.com/embed/${this.state.moreInfo.results[0].key}`}
                                width="800" height="500" frameBorder="0" allowFullScreen/>
                        }
                        <NewPost
                            movieId={this.props.match.params.movie_id}
                            movie={this.state.movie}/>
                    </div>
                    <div className={"col-3"}>
                        {this.state.movie &&
                        <div>
                            <br/>
                            <img className={"post"} src={this.state.movie.poster_path && `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}/>
                            <hr/>
                            <h3>Title: </h3>
                            {this.state.movie.original_title}
                            <hr/>
                            <h3>Rating in The Movie Database (TMDb): </h3>
                            {this.state.movie.vote_average}
                            <hr/>
                            <h3>Genres: </h3>
                            {this.state.movie.genres && this.state.movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                            <hr/>
                            <h3>Release date: </h3>
                            {this.state.movie.release_date}
                            <hr/>
                            <h3>Homepage:</h3>
                            <a href={this.state.movie.homepage}>{this.state.movie.homepage}</a>
                            <hr/>
                            <h3>Plot:</h3>
                            <p>{this.state.movie.overview}</p>
                            <hr/>
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
