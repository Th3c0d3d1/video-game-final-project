import React from "react";
import "../../styles/home.css";
import { testAPI } from "../../../TestApi";
import "../store/flux";


export const Gamepicker = props => {
	
	return (
		<div className="text-center mt-5">
			<form className="d-flex justify-content-evenly">
				<select className="form-select" name="genre">
					<option value="Choose" selected disabled hidden>Genre</option>
					<option value="Action">Action</option>
					<option value="Adventure">Adventure</option>
					<option value="Fighting">Fighting</option>
					<option value="Racing">Racing</option>
					<option value="RPG">RPG</option>
				</select>
				<select className="form-select" name="ESRB Rating">
					<option value="Choose" selected disabled hidden>ESRB Rating</option>
					<option value="Everyone">Everyone</option>
					<option value="Ten & Up">E-Ten</option>
					<option value="Teen">Teen</option>
					<option value="Mature">Mature</option>
				</select>
				<select className="form-select" name="Platform">
					<option value="Choose" selected disabled hidden>Platform</option>
					<option value="PC">PC</option>
					<option value="Playstation">Playstation</option>
					<option value="Xbox">Xbox</option>
				</select>
				<select className="form-select"name="NumberPlayers">
					<option value="Choose" selected disabled hidden>Number of Players</option>
					<option value="Singleplayer">Singleplayer</option>
					<option value="Multiplyer">Multiplayer</option>
				</select>
			</form>
			<div className="ContainerBorder">
				This is the container to display games.
			</div>
	<button onClick={testAPI}>Get APi</button>
</div>
);
};

export default Gamepicker;