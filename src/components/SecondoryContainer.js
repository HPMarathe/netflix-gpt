import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondoryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies?.nowPlayingMovies && (
      <div className=" bg-black ">
        <div className="mt-0 sm:-mt-10 md:-mt-64 pl-0 md:pl-12 relative z-10">
          {" "}
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Top rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondoryContainer;

//remember to give z-index one position property should be given.
