import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// https://developer.themoviedb.org/docs/image-basics

const MovieList = ({ title, movies }) => {
  // const dispatch = useDispatch();
  // console.log(movies);
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies?.map((movie) => (
            <Link to={"/movie/" + movie.id} key={movie.id}>
              <MovieCard posterPath={movie?.poster_path} />
            </Link>
          ))}

          {/* <MovieCard posterPath={movies[0]?.poster_path} />
          <MovieCard posterPath={movies[1]?.poster_path} />
          <MovieCard posterPath={movies[2]?.poster_path} />
          <MovieCard posterPath={movies[3]?.poster_path} />
          <MovieCard posterPath={movies[4]?.poster_path} />
          <MovieCard posterPath={movies[5]?.poster_path} /> */}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
