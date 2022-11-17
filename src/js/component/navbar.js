import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<h1 className="navbar-brand mb-0 mx-2"><i className="fa-solid fa-meteor mx-2"></i>Blue Comet Gaming</h1>
			</Link>
				<form className="d-flex">
					<input className="form-control mr-sm-2" type="search" placeholder="Find Games" aria-label="Search"></input>
					<button className="btn btn-secondary my-2 my-sm-0" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
				</form>
			<div className="ml-auto">
				<p className="text-white text-center">Check out our Github</p>
				<Link to="/demo">
					<button className="btn btn-primary mx-2">Steven</button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-primary mx-2">Luis</button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-primary mx-2">Jacob</button>
				</Link>
			</div>
		</nav>
	);
};
