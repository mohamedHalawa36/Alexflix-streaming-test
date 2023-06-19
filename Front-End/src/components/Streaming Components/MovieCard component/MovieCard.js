import { useNavigate } from "react-router-dom";
import "./MovieCard.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../../../store/Slice/favoritesSlice";
import { Button } from "react-bootstrap";
export function MovieCard({ movie, isFav, type }) {
  const [isFavorite, setIsFavorite] = useState(isFav);
  const [inCart, setInCart] = useState(false);
  const dispatch = useDispatch();
  const addToCart = function (e) {};
  const addToFav = function (e) {
    e.stopPropagation();
    if (!isFavorite) {
      dispatch(addToFavorites(movie));
      setIsFavorite(true);
    } else {
      dispatch(deleteFromFavorites(movie));
      setIsFavorite(false);
    }
  };
  const navigate = useNavigate();
  const moveToDetails = function () {
    if (type === "video") navigate(`/movies/${movie._id}`);
    else if (type === "product") navigate(`/store/product/${movie._id}`);
  };

  return (
    <div className="card p-0 m-2 mt-0 border-0 rounded-3 position-relative">
      <div className="img-container position-relative">
        <div className="card-overlay d-flex justify-content-center align-items-center rounded-3 position-absolute top-0 start-0 w-100 h-100 ">
          <div className="card-btns text-center">
            <Button
              onClick={addToFav}
              className={`my-1 ${type === "video" ? "" : "d-none"}`}
              variant="outline-secondary"
            >
              <i className={`fa-solid fa-${isFavorite ? "check" : "plus"}`}></i>{" "}
              List
            </Button>
            <Button
              onClick={addToCart}
              className={`my-1 ${type === "product" ? "" : "d-none"}`}
              variant="outline-secondary"
            >
              <i className={`fa-solid fa-${inCart ? "check" : "plus"}`}></i>{" "}
              Cart
            </Button>
            <br />
            <Button
              onClick={moveToDetails}
              className="my-1"
              variant="outline-secondary"
            >
              Details
            </Button>
          </div>
        </div>
        <img
          src={movie.poster_image|| movie.images[0].secure_url}
          className="card-img-top rounded-4"
          alt="..."
        />
      </div>
      <div className="card-body p-2">
        <h5 className="card-text text-center my-0">{movie.name}</h5>
      </div>
    </div>
  );
}
