import React, {Component} from 'react'
import {findUserByUsername, profile} from "../services/UserService";
import ReviewedMovie from "../homePage/ReviewedMovie";
import AnonymousReview from "./AnonymousReview";
import {Link} from "react-router-dom";

class AnonymousUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user : {}
        }
    }
    componentDidMount() {
        findUserByUsername(this.props.match.params.username)
            .then(user => this.setState({
                user : user
            }))
    }

    render() {
        return (
            <div className={"container"}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <Link to={`/`}>
                        <img className={"douban col-3"} src={"https://upload.wikimedia.org/wikipedia/commons/a/aa/Douban_logo.svg"}/>
                    </Link>

                    {/*<h1 className="navbar-brand col-7">{this.state.movie && this.state.movie.title}</h1>*/}
                </nav>
                <div className={"row"}>
                    <img className={"profile-photo"} src={`https://www.mentoring.org/new-site/wp-content/uploads/2019/05/default-user-300x300.png`}/>
                    <div>
                        <br/>
                        <h2>{this.state.user && this.state.user.username}</h2>
                        <h2>The user's role is: {this.state.user && this.state.user.role}</h2>
                    </div>
                </div>
                <hr/>
                <h2>Reviews</h2>
                {this.state.user.id && <AnonymousReview userId={this.state.user.id}/>}
            </div>
        )
    }
}

export default AnonymousUser