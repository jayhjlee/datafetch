import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<section>
				<header className="navbar">
					<div className="container">
						<nav className="flex">
							<h1>DataFetch</h1>
							<ul>
								<li>Welcome!</li>
							</ul>
						</nav>
					</div>
				</header>
			</section>
		);
	}
}

export default Header;
