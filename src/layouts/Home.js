import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "./Login";

import { signIn, fetchUser } from "../store/actions/user";

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

	componentDidMount() {
		this.props.loadUser();
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
		const { isLoggedIn, token, user } = this.props;

		return (
			<section>
				{isLoggedIn && token ? (
					<div className="welcome-view">
						<div className="card">{user} is logged in!</div>
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
	const { isLoggedIn, token, username } = state.user;

	return {
		isLoggedIn,
		token,
		user: username,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadUser: () => dispatch(fetchUser()),
		login: credential => dispatch(signIn(credential)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
