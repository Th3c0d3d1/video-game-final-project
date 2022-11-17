import React from "react";
import "../../styles/home.css";
import { testAPI } from "../../../TestApi";


export const Home = () => (
	<div className="text-center mt-5">
		<button onClick={testAPI}>Get APi</button>
		<h1>Final Project</h1>
		<p>Filler text</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
