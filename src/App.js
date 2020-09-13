import React, { useEffect, useState } from 'react';
import Tmdb from "./Tmdb";
import "./App.css";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default function App() {

	const [movieList, setMovieList] = useState([]);
	const [featuredData, setFeaturedData] = useState(null);
	const [blackHeader, setBlackHeader] = useState(false);

	useEffect(() => {
		const loadData = async () => {
			// Pegando lista de filmes
			let list = await Tmdb.getHomeList();
			setMovieList(list);

			// Pegando filme em destaque
			let originals = list.filter(item => item.slug === "originals");
			let randomOriginalIndex = Math.floor(Math.random() * (originals.[0].items.results.length - 1));
			let randomOriginal = originals[0].items.results[randomOriginalIndex];
			let originalInfo = await Tmdb.getMovieInfo(randomOriginal.id, "tv");
			setFeaturedData(originalInfo);
		}

		loadData();
	}, [])

	useEffect(() => {
		const scrollListener = () => {
			if(window.scrollY > 10)
				setBlackHeader(true);
			else
				setBlackHeader(false);
		}
		window.addEventListener("scroll", scrollListener);
	}, [])

	return (


		<div className="page">
		<Header black={blackHeader} />
		{featuredData &&
			<FeaturedMovie item={featuredData} />
		}

			<section className="lists">
				{movieList.map((item, index) => (
					<MovieRow key={index} title={item.title} items={item.items} />
				))}
			</section>
			<footer>
				Direitos de imagem para Netflix<br />
				Dados pegos do site TheMoviedb.org
			</footer>

			{movieList.length <= 0 &&
				<div className="loading">
					<img src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" alt="Carregando" />
				</div>
			}
		</div>
	)
}