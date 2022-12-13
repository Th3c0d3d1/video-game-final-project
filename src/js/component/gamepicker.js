import React, { useEffect, useState, useContext } from "react";
import "../../styles/gamepicker.css";
import "../store/flux";
import FilterFunction from "../../../FilterFunction";
import { Context } from "../store/appContext";


export const Gamepicker = props => {
	// const [query, setQuery] = useState("");
	let searchProperties = {
		search: "",
		genre: "",
		platform: "",
		esrb_rating: ""
	}
	const [query, setQuery] = useState(searchProperties);
	const { store, actions } = useContext(Context);
	const [searchResults, setSearchResults] = useState([]);

	// useEffect(() => {
	// 	actions.datafetcher()
	// }, [store.searchProperties.genre]);
	return (
		<div className="text-center mt-5">
			<form className="d-flex">

				<select onChange={(e)=>(actions.searchPropertiesChanger('genre',e.target.value))}className="form-select" name="genre">
					<option  value="Genre">Genres</option>
					<option  value="Action">Action</option>
					<option value="Adventure">Adventure</option>
					<option  value="Fighting">Fighting</option>
					<option value="Racing">Racing</option>
					<option  value="RPG">RPG</option>
					<option value="Platformer">Platformer</option>
				</select>

				<select onChange={(e)=>(actions.searchPropertiesChanger('platform',e.target.value))} className="form-select" name="Platform">
					<option  value="Platform">Platform</option>
					<option  value="PC">PC</option>
					<option  value="Playstation">Playstation</option>
					<option value="Xbox">Xbox</option>
					<option value="Nintendo">Nintendo</option>
				</select>

		

				<select onChange={(e)=>(actions.searchPropertiesChanger('tags',e.target.value))} className="form-select" name="Single-Or-Online">
					<option  value="Online-or-Multi">Number of Players</option>
					<option value="singleplayer">Singleplayer</option>
					<option  value="multiplayer">Multiplayer</option>
					<option  value="coop">Coop</option>
				</select>
			</form>

		
		</div>
	);
};

export default Gamepicker;