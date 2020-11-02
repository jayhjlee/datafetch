import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "./Login";

import { signIn } from "../store/actions/login";

class Home extends Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			username: "",
			password: "",
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleLogin(e) {
		e.preventDefault();
		this.props.login(this.state);
	}

	render() {
		const { username, password } = this.state;
		const { isLoggedIn, token } = this.props;

		return (
			<section>
				{isLoggedIn && token ? (
					<div className="welcome-view">
						<div className="card">You are logged in!</div>
					</div>
				) : (
					<Login
						username={username}
						password={password}
						handleChange={this.handleChange}
						handleSubmit={this.handleLogin}
					/>
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
