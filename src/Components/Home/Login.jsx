import React from "react";
import { withRouter } from "react-router-dom";
import * as userService from "../../services/userService";
import Swal from "sweetalert2";
import "./Home.css";
import logo from "./logo.svg";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCredentials: { email: "", password: "" },
            activeUser: false,
        };
    }

    onFormChange = e => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;
        this.setState(() => {
            let newState = { ...this.state.userCredentials };
            newState[inputName] = newValue;

            return { userCredentials: newState };
        });
    };

    onClickEvent = e => {
        e.preventDefault();

        let userdata = {
            email: this.state.userCredentials.email,
            password: this.state.userCredentials.password,
            tenantId: "U01R71K7F19",
        };
        this.setState(prevState => {
            let newState = { ...prevState };
            newState.activeUser = true;
            return newState;
        });

        userService
            .logIn(userdata)
            .then(this.onLoginSuccess)
            .catch(this.onLoginFail);
    };
    onLoginSuccess = res => {
        console.log(res);

        Swal.fire({
            title: `Greetings`,
            text: "Glad to see you back",
            icon: "success",
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
        });

        setTimeout(() => {
            console.log("Firing one", this.props.updateAppState);
            this.props.updateAppState();
        }, 1500);
        setTimeout(() => {
            console.log("Firing Two", this.props.history.push);
            this.props.history.push("/Home");
        }, 3000);
    };

    onLoginFail = res => {
        console.log(res);
        Swal.fire({
            title: "Login Failed!",
            text: "Please verify credentials",
            icon: "error",
            confirmButtonText: "Too Bad So Sad",
        });
    };

    render() {
        //console.log("rendering login");
        return (
            <React.Fragment>
                <div className="container background" id="loCon">
                    <div className="container">
                        <form className="form-signin">
                            <div className="flex-row title" id="tiDiv">
                                <img
                                    id="tImg"
                                    alt=""
                                    src={logo}
                                    width="100"
                                    height="100"
                                />
                                <h3 className="sm-2 tiText">
                                    Sign into a Happy Place
                                </h3>
                            </div>
                            <label htmlFor="inputEmail" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control lControl"
                                placeholder="Email address"
                                id="email"
                                name="email"
                                onChange={this.onFormChange} //currentTarget = input
                                value={this.state.userCredentials.email}
                                required
                            />
                            <label htmlFor="inputPassword" className="sr-only">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control lControl"
                                placeholder="Password"
                                id="password"
                                name="password"
                                onChange={this.onFormChange} //currentTarget = input
                                value={this.state.userCredentials.password}
                                required
                            />
                            <button
                                className="btn btn-lg btn-primary btn-block"
                                id="lButton"
                                type="submit"
                                onClick={this.onClickEvent}
                            >
                                Sign in
                            </button>
                            <p className="mr-2 mb-3 text-muted float-right">
                                &copy; 2021
                            </p>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Login);
