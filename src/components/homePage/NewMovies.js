import React from "react";
import {Link} from "react-router-dom";

export default class NewMovies extends React.Component {
    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=96bf64810bb08ac090ee8a60602af234&page=1`, {
        }).then(response => response.json())
            .then(results => this.setState({
                movies: results.results,
            }))
    }



    state = {
        movies: [],
    };
    render() {
        return(
            <div >
                <br/>

                <h2 className={"now-playing"}>Now Playing In Theaters</h2>
                <div className={"row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 "}>
                    {
                        this.state.movies && this.state.movies.map(movie =>
                            <div key={movie.id} className="col mb-4">
                                <div className="card h-100">
                                    <Link className="card-title" to={`/movies/title/${movie.id}`}>
                                        {!movie.poster_path && <img className={"card-img-top new-movie-post"} src={!movie.poster_path && `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}/>}
                                        {movie.poster_path && <img className={"card-img-top new-movie-post"} src={movie.poster_path && `https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>}
                                    </Link>
                                    <div className="card-body">
                                        <Link className="card-title" to={`/movies/title/${movie.id}`}>
                                            <h6>{movie.title || movie.name}</h6>
                                        </Link>
                                        <div className="card-body-release-time">
                                            {movie.release_date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
