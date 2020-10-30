import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../components/Input";
import Button from "../components/Button";

import { signIn } from "../store/actions/login";

class Home extends Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(e) {
		e.preventDefault();

		const mockCredential = "fakeCredential";
		this.props.login(mockCredential);
	}

	render() {
		const { isLoggedIn, token } = this.props;

		return (
			<section>
				{isLoggedIn && token ? (
					<div className="welcome-view">
						<div className="card">You are logged in!</div>
					</div>
				) : (
					<div className="login-form">
						<div className="card">
							<h2>Login</h2>
							<form>
								<Input label="Username" />
								<Input label="Password" type="password" />
								<Button action={this.handleLogin} innerText="Login" />
							</form>
						</div>
					</div>
				)}
			</section>
		);
	}
}

const mapStateToProps = state => {
	const { isLoggedIn, token } = state.login;

	return {
		isLoggedIn,
		token,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: credential => dispatch(signIn(credential)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
