import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="font-bold text-4xl "> {title}</h1>
      <p className="py-3 w-2/4 text-lg">{overview}</p>
      <div>
        <button className="bg-white text-black text-xl py-4 px-12 mx-1 rounded-lg hover:bg-opacity-60">
          Play
        </button>
        <button className="bg-gray-700 opacity-80 text-white text-xl py-4 px-12 mx-1 rounded-lg hover:bg-opacity-60">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
