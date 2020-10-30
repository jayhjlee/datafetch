import React, { Component } from "react";

class Sidebar extends Component {
	render() {
		return (
			<section>
				<div className="sidebar">
					<div className="flex">
						<ul>
							<li>
								<a>
									<h4>Lead</h4>
								</a>
							</li>
							<li>
								<a>
									<h4>Opportunity</h4>
								</a>
							</li>
							<li>
								<a>
									<h4>Account</h4>
								</a>
							</li>
							<li>
								<a>
									<h4>Admin</h4>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Sidebar;
