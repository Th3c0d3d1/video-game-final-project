import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { testAPI } from "../../../TestApi";
import "../store/flux";
import FilterFunction from "../../../FilterFunction";


export const Gamepicker = props => {
	const [query, setQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.rawg.io/api/games?key=bfe242c109884e06860a295ba9f3a547&${query}`
		)
			.then((res) => res.json())
			.then((data) => {
				{
					data ? setSearchResults(data.results) : "loading";
				}
				console.log(data);
				console.log(data.results);
			})
			.catch((error) => console.error("Error:", error));
	}, [query]);
	return (
		<div className="text-center mt-5">
			<form className="d-flex justify-content-evenly">
				<select className="form-select" name="genre">
					<option value="Choose" selected>Genre</option>
					<option onClick={() => setQuery("genres=action")} value="Action">Action</option>
					<option onClick={() => setQuery("genres=adventure")} value="Adventure">Adventure</option>
					<option onClick={() => setQuery("genres=fighting")} value="Fighting">Fighting</option>
					<option onClick={() => setQuery("genres=racing")} value="Racing">Racing</option>
					<option onClick={() => setQuery("genres=role-playing-games-rpg")} value="RPG">RPG</option>
				</select>
				<select className="form-select" name="ESRB Rating">
					<option value="Choose" selected disabled hidden>ESRB Rating</option>
					<option onClick={() => setQuery("Everyone")} value="Everyone">Everyone</option>
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
				<select className="form-select" name="NumberPlayers">
					<option value="Choose" selected disabled hidden>Number of Players</option>
					<option value="Singleplayer">Singleplayer</option>
					<option value="Multiplyer">Multiplayer</option>
				</select>
			</form>
			<div className="ContainerBorder">
				This is the container to display games.
			</div>
			<button onClick={testAPI}>Get APi</button>
			{searchResults.map((game, index) => {
				return (
					<div key={index}>
						<h1>{game.name}</h1>
						<p>
							ESRB:
							{game.esrb_rating
								? game.esrb_rating.name
								: "Rating Not available"}
						</p>
						<p>Released: {game.released}</p>


						<div class="card" >
							<img src={game.background_image} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">{game.name}</h5>
								<p class="card-text">  ESRB:
									{game.esrb_rating
										? game.esrb_rating.name
										: "Rating Not available"}
								</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>

					</div>
				);
			})
			}
		</div>
	);
};

export default Gamepicker;