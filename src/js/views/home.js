import React from "react";
import "../../styles/home.css";
import { testAPI } from "../../../TestApi";




export const Home = props => {
	
	return (
		<div className="text-center mt-5">
			<form>
				<select name="genre">
				<option value="none" selected disabled hidden>Genre</option>
					<option value="Action">Action</option>
					<option value="Adventure">Adventure</option>
					<option value="Fighting">Fighting</option>
					<option value="Racing">Racing</option>
					<option value="RPG">RPG</option>
				</select>
			</form>
	<button onClick={testAPI}>Get APi</button>
</div>
	);
};

