import React, {Component} from 'react'
import EachReviewedMovie from "./EachReviewedMovie";


class ReviewedMovie extends Component{
    constructor(props) {
        super(props);
        this.state = {
            moviesIds: []
        }
    }
    componentDidMount () {
        this.setState({
            moviesIds : this.update()
        })
    };
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
            <div className={"row"}>
                    {this.update() && this.update().map(mid =>
                        <EachReviewedMovie key={mid} mid={mid}/>
                    )}

            </div>
        )
    }
}

export default ReviewedMovie