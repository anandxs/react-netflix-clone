import React, { useContext, useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../axios";
import { imageUrl } from "../constants";
import { rowPostContext } from "../contexts";

function RowPost({ title, url }) {
	const [movies, setMovies] = useState([]);
	const originals = useContext(rowPostContext);

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setMovies(response.data.results);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="posters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						className="poster"
						alt="poster"
						src={imageUrl + movie.poster_path}
					/>
				))}
			</div>
		</div>
	);
}

export default RowPost;
