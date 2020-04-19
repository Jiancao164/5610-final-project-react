import {Component} from "react";
import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomeHeading from "../components/homePage/HomeHeading";
import LoginHeading from "../components/loginPage/LoginHeading";
import MovieDetails from "../components/detailPage/MovieDetails";
import SignUp from "../components/loginPage/SignUp";
import Profile from "../components/loginPage/Profile";
import AnonymousUser from "../components/anonymousPage/AnonymousUser";
import Privacy from "../components/privacyPage/Privacy";

class Manager extends Component{
    render() {
        return (
            <div className="container-fluid">
                <Router>
                    <Route
                        path="/"
                        exact={true}
                        render={(props) =>
                            <HomeHeading
                                {...props}/>
                        }/>
                    <Route
                        path={"/privacy"}
                        exact={true}
                        component={Privacy}/>
                    <Route
                        path={"/search/:latestTitleSearch"}
                        exact={true}
                        component={HomeHeading}/>

                    <Route
                        path="/login"
                        exact={true}
                        render={(props) =>
                            <LoginHeading history={props.history}/>
                        }/>
                    <Route
                        path="/register"
                        exact={true}
                        render={(props) =>
                            <SignUp history={props.history}/>
                        }/>
                    <Route
                        path="/profile"
                        exact={true}
                        render={(props) =>
                            <Profile history={props.history}/>
                        }/>
                    <Route
                        path="/profile/:username"
                        exact={true}
                        render={(props) =>
                            <AnonymousUser
                                {...props}
                                history={props.history}/>
                        }/>
                    <Route
                        path={`/details/:movie_id`}
                        exact={true}
                        component={MovieDetails}/>
                </Router>
            </div>
        )
    }
}

export default Manager