import React, {Component} from 'react'
import {findMovieById} from "../services/MovieService";
import {Link} from "react-router-dom";

class EachReviewedMovie extends Component{
    state = {
        movie: {},
        moreInfo: {}
    };

    componentDidMount() {
        findMovieById(this.props.mid)
            .then(movie => this.setState({
                movie: movie
            }))
    }
    update = () => {
        let as = [];
        for (let i = 0; i < this.props.reviews.length; i++) {
            as.push(this.props.reviews[i].movieId)
        }
        as = Array.from(new Set(as));

        return as;
    };
    render() {
        return (
            <div>
                <div className="col-sm-4">
                    <Link className="card-title " to={`/movies/title/${this.state.movie.id}`}>
                        {!this.state.movie.poster_path && <img className={"card-img-top thumbnail-post reviewed-post"} src={!this.state.movie.poster_path && `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}/>}
                        {this.state.movie.poster_path && <img className={"card-img-top thumbnail-post reviewed-post"} src={this.state.movie.poster_path && `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}/>}
                    </Link>

                </div>
                <br/>
            </div>
        )
    }
}

export default EachReviewedMovie