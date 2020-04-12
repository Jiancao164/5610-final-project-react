import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {login} from "../../services/UserService";

class LoginHeading extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

    }
    failToLogin = () => {
        alert("Error, please try again!")
    };
    handleLogin = (user) =>
        login(user)
            .then(currentUser => currentUser.toString() !== "SyntaxError: Unexpected end of JSON input"? this.props.history.push('/profile') : this.failToLogin() );

    render() {
        return (
            <div className="container">
                <h1>Sign In</h1>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="username"
                                   value={this.state.username}
                                   onChange={event => this.setState({username: event.target.value})}
                                   placeholder="Alice"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control wbdv-field wbdv-password"
                                   id="password"
                                   value={this.state.password}
                                   onChange={event => this.setState({password: event.target.value})}
                                   placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                onClick={() => this.handleLogin(this.state)}
                                className="btn btn-primary btn-block wbdv-button wbdv-login">Sign in</button>
                            <div className="row">
                                <div className={"col-12"}>
                                    <Link to={`/register`}>Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default LoginHeading