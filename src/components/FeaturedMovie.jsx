import React from "react";
import "./FeaturedMovie.css";

export default function FeaturedMovie({item}) {

	let firstDate = new Date(item.first_air_date);
	let description = item.overview;
	console.log(description)
	description = description.length >= 200 ? description.substring(0, 200) + "..." : description;
	console.log(description)
	let genres = [];
	for(let i in item.genres) {
		genres.push(item.genres[i].name);
	};



	
	return (
		<div>
			<section className="featured" style={{
				backgroundSize: "cover",
				backgroundPostion: "center",
				backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
			}}>
				<div className="featured--vertical">
					<div className="featured--horizontal">
						<div className="featured--name">{item.original_name}</div>
						<div className="featured--info">
							<div className="featured--score">{item.vote_average} pontos</div>
							<div className="featured--year">{firstDate.getFullYear()}</div>
							<div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons > 0 ? "s" : ""}</div>
						</div>
						<div className="featured--description">{description}</div>
						<div className="featured--buttons">
							<a href={`/watch/${item.id}`} className="featured--watchbutton">▶ Assistir</a>
							<a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
						</div>
						<div className="featured--genres"><strong>Gêneros:</strong> {genres.join(", ")}</div>
					</div>
				</div>
			</section>
		</div>
	)
}