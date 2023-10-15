import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-52 px-12">
      <h1 className="font-bold text-4xl "> {title}</h1>
      <p className="py-3 w-1/4 text-lg">{overview}</p>
      <div>
        <button className="bg-gray-800 opacity-50 text-white font-bold p-4 px-13 mx-1 rounded-lg">
          Play
        </button>
        <button className="bg-gray-700 opacity-50 text-white font-bold p-4 px-13 mx-1 rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
