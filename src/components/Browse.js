import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // custom hook for now playing movies
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

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
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondoryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
