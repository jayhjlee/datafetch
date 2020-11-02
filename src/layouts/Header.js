import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUser } from "../store/actions/user";

class Header extends Component {
	render() {
		const { username, token, isLoggedIn } = this.props;

		return (
			<section>
				<header className="navbar">
					<div className="container">
						<nav className="flex">
							<h1>DBuilder</h1>
							<ul className="my-1">
								{username && token && isLoggedIn ? (
									<li className="mx-1">
										Welcome! {username} <a>Logout</a>
									</li>
								) : null}
							</ul>
						</nav>
					</div>
				</header>
			</section>
		);
	}
}

const mapStateToProps = state => {
	const { username, token, isLoggedIn } = state.user;

	return {
		username,
		token,
		isLoggedIn,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadUser: () => dispatch(fetchUser()),
		logOut: () => dispatch(logOut()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
