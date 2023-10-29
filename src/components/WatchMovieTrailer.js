import { useParams } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import useWatchMovieTrailer from "../hooks/useWatchMovieTrailer";

const WatchMovieTrailer = () => {
  const { id } = useParams();
  // console.log(id);

  //   useMovieTrailer(id);
  useWatchMovieTrailer(id);
  const watchMovieTrailerVideo = useSelector(
    (store) => store.movies?.watchMovieTrailerVideo
  );

  //   const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-screen bg-black">
      <iframe
        className="w-screen aspect-video h-screen"
        src={
          "https://www.youtube.com/embed/" +
          watchMovieTrailerVideo?.key +
          "?autoplay=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchMovieTrailer;
