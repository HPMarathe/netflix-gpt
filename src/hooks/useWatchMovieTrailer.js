import { useDispatch } from "react-redux";
import {
  addWatchMovieTrailerVideo,
  clearWatchMovieTrailerVideo,
} from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

//fetching movie videos filtering the trailer & putting on the store.
const useWatchMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // const watchMovieTrailerVideo = useSelector(
  //   (store) => store?.movies?.watchMovieTrailerVideo
  // );
  //  fetching trailer videos & updating the store with trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );

    // As this filterdata have multiple trailer videos we are taking first trailer.Second case is if there are no filter data then just print first result as trailer.
    const trailer = filterData?.length ? filterData[0] : json?.results[0];

    dispatch(clearWatchMovieTrailerVideo());
    // Putting trailer into the store

    dispatch(addWatchMovieTrailerVideo(trailer));

    // console.log(trailer);
    // In every result you will get a youtube key.
    // You can use this key to show your trailer.
    // go to any youtube video & click on share there you will get embeded video,Copy & paste it in return & change the key accordingly.
    //        src="https://www.youtube.com/embed/trailer.key"
  };

  // useEffect(() => {
  //   getMovieVideos();
  // }, []);

  useEffect(() => {
    getMovieVideos();

    return () => {
      dispatch(clearWatchMovieTrailerVideo());
    };
  }, []);
};

export default useWatchMovieTrailer;
