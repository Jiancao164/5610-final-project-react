import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {register} from "../services/UserService";

export default class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            verifyPassword: '',
            email: '',
            phone: '',
            role: ''
        }

    }

    handleRegister = (user) =>
        register(user)
            .then(user => this.props.history.push('/profile'))

    render() {
        return (
            <div className="container">
                <h1>Register</h1>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="username"
                                   value={this.state.username}
                                   onChange={event => this.setState({username: event.target.value})}
                                   placeholder="Alice"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
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
                        <label className="col-sm-2 col-form-label">
                            Verify Password </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control wbdv-field wbdv-password-verify"
                                   id="VerifyPassword"
                                   value={this.state.verifyPassword}
                                   onChange={event => this.setState({verifyPassword: event.target.value})}
                                   placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                onClick={() => this.handleRegister(this.state)}
                                className="btn btn-primary btn-block">Sign up</button>
                            <div className="row">
                                <div className="col-6">
                                    <Link to={`/login`}>Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}