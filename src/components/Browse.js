import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";

const Browse = () => {
  // custom hook for now playing movies
  useNowPlayingMovies();

  return (
    <div>
      {/* 
      MainContainer
      - Videobg
      -videotitle

      Secondorycontainer
      -Movieslist * N
      - Card*N

      */}
      <Header />
      <MainContainer />
      <SecondoryContainer />
    </div>
  );
};

export default Browse;
