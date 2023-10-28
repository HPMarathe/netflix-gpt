import React from "react";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  // console.log(movieId);
  return (
    <div className="pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="font-bold text-lg md:text-4xl "> {title}</h1>
      <p className="hidden md:inline-block py-3 w-1/3 text-lg">{overview}</p>
      <div>
        <Link to={"/movie/" + movieId}>
          <button className="bg-white text-black text-xl py-2 md:py-4 px-3 md:px-12 mx-1 my-4 md:my-0 rounded-lg hover:bg-opacity-60">
            Play
          </button>
        </Link>
        <Link to={"/movie/" + movieId}>
          <button className="hidden md:inline-block bg-gray-700 opacity-80 text-white text-xl py-4 px-12 mx-1 rounded-lg hover:bg-opacity-60">
            More info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
