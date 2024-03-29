import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'

function Navbar({changeLoginStatus}) {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
				<div className="container-fluid">
					<Link className="navbar-brand text" to="/">
						TweetX
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink
									className={({ isActive }) =>
										isActive ? "nav-link active link-active" : "nav-link"
									}
									aria-current="page"
									to="/feed"
								>
									Feed
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className={({ isActive }) =>
										isActive ? "nav-link active link-active" : "nav-link"
									}
									to="/users"
								>
									Users
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className={({ isActive }) =>
										isActive ? "nav-link active link-active" : "nav-link"
									}
									to="/profile"
								>
									Profile
								</NavLink>
							</li>
						</ul>
						<button className="btn btn-outline-success my-2 my-sm-0 loginBtn" onClick={()=>{changeLoginStatus(false)}}>Logout</button>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
