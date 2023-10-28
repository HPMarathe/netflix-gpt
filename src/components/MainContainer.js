import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  // Subscribing to movies
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // implementing early return here is necessary bcoz if we didn do it we will get an error as movies[0]=null till it fetches the movies.
  // if (!movies) return;

  if (movies == null) return;
  const mainMovie = movies[1];

  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} movieId={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
