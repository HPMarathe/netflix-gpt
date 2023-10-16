import React from "react";
import MovieCard from "./MovieCard";

// https://developer.themoviedb.org/docs/image-basics

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
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
