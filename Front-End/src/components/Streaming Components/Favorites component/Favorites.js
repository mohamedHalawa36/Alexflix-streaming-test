import { useEffect } from "react";
import { MovieCard } from "../../Streaming Components/MovieCard component/MovieCard";
import "./favorites.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllFav } from "../../../store/Slice/videosSlice";
export default function Favorites() {
  const dispatch = useDispatch();
  const allVids = useSelector((state) => state.videos);
  const favorites = [...allVids.favorites];
  useEffect(() => {
    dispatch(getAllFav());
  }, []);
  return (
    <div id="favorites" className="">
      <h1 className="text-center text-light">Favorites</h1>
      <h3
          className={`text-center text-capitalize text-light ${
            favorites.length === 0 ? "" : "d-none"
          }`}
        >
          no favorites yet !
        </h3>
      <div className="favorite-cards row justify-content-center">
        {favorites.map((movie) => {
          let movieObj = {...movie,poster_image : movie.poster};
          return <MovieCard movie={movieObj} key={movie.id} isFav={true} type={`video`} />;
        })}
      </div>
    </div>
  );
}
