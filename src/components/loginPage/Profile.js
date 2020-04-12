import React from "react";
import {profile, logout, update} from "../../services/UserService";
import {Link} from "react-router-dom";

export default class Profile extends React.Component {

    state = {
        profile: {
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            role: ''
        }
    };

    componentDidMount() {
            profile()
                .then(profile => this.setState({
                    profile: profile
                }))

    }

    update = (profile) => {
        update(profile);
        this.setState({
            profile: profile
        });
        alert("Updated successfully")
    };

    logout = () =>
        logout()
            .then(status => {
                this.props.history.push('/')
            });

    render() {
        return(
            <div>
                {this.state.profile &&
                <div>
                    <Link className={"col-2"} to={`/`}>
                        <img className={"douban-profile"} src={"https://upload.wikimedia.org/wikipedia/commons/a/aa/Douban_logo.svg"}/>
                    </Link>

                    <hr/>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="username"
                                   readOnly
                                   value={this.state.profile.username}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">
                            Phone </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-phone"

                                   id="phone"
                                   onChange={event => this.setState({
                                       profile : {...this.state.profile, phone: event.target.value}
                                   })}
                                   value={this.state.profile.phone}
                                   placeholder="(555)123-4324"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-email"
                                   type={"email"}
                                   onChange={event => this.setState({
                                       profile : {...this.state.profile, email: event.target.value}
                                   })}
                                   value={this.state.profile.email}
                                   placeholder="alice@wonderland.com"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="role" className="col-sm-2 col-form-label">
                            Role </label>
                        <div className="col-sm-10">
                            <select className="form-control wbdv-field wbdv-role"
                                    onChange={event => this.setState({
                                        profile :{...this.state.profile, role: event.target.value.toString()}
                                    } ) }

                                    value={this.state.profile.role}
                                    id="role">
                                <option value="USER">User - can post reviews</option>
                                <option value="ADMIN">Admin - can manage reviews</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                onClick={() => this.update(this.state.profile)}
                                className="btn btn-primary btn-block wbdv-button wbdv-update">
                                Update
                            </button>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                onClick={this.logout}
                                className={`btn btn-block btn-danger`}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>}
            </div>



        )
    }
}
