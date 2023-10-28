import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
    // this will return promises.
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // you will get outpu of console log only if you click on search.

    const gptQuery =
      "Act as a movie recommendation system & suggest some movies for the query." +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example result given ahead. Example results : One Piece, Sholay,Don,Gadar";
    // Make an API Call to get movie results

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(gptResults.choices[0]?.message?.content);
    // "Andaz Apna Apna, Chupke Chupke, Gol Maal, Amar Akbar Anthony, Hera Pheri"

    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    // (5) ['Andaz Apna Apna', ' Chupke Chupke', ' Gol Maal', ' Amar Akbar Anthony', ' Hera Pheri']- Array of movies

    // for each movie we will call tmdb api & will show results.

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    // console.log(tmdbResults);
    // either you can pick titles with exact match by filtering logiic or all results

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex  md:justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-full md:w-1/2 grid grid-cols-12 "
      >
        <input
          ref={searchText}
          className=" p-4 m-4 rounded-lg col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-red-500 text-white p-4 m-4 col-span-3 rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
