import React from "react";
import {Link} from "react-router-dom";

export default class MoviePrototype extends React.Component {
    componentDidMount() {
        let searchTitle = this.props.latestTitleSearch;

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=96bf64810bb08ac090ee8a60602af234&query=${searchTitle}&page=1`, {
        }).then(response => response.json())
            .then(results => this.setState({
                movies: results.results,
                titleSearch: searchTitle,
            }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.latestTitleSearch !== this.props.latestTitleSearch) {
            this.findMovieByTitle(this.props.latestTitleSearch)
        }
    }

    findMovieByTitle = (title) =>
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=96bf64810bb08ac090ee8a60602af234&query=${title}&page=1`, {
        }).then(response => response.json())
            .then(results => this.setState({
                movies: results.results,
            }));

    state = {
        movies: [],
        titleSearch: '',
    };
    render() {
        return(
            <div>
                <ul className="list-group">
                    {
                        this.state.movies && !this.state.movies[0] &&
                            <div className={"container-fluid"}>
                                <br/>
                                <h4>...Sorry, no movies found</h4>
                            </div>
                    }
                    {
                        this.state.movies && this.state.movies.map(movie =>
                            <li key={movie.id}
                                className="list-group-item">
                                {!movie.poster_path && <img className={"thumbnail-na"} src={!movie.poster_path && `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}/>}
                                {movie.poster_path && <img className={"thumbnail"}
                                      src={movie.poster_path && `https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                                }
                                <Link to={`/movies/title/${movie.id}`}>
                                    {movie.title || movie.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
