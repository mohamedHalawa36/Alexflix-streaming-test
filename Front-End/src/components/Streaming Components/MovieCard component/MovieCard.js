import { useNavigate } from "react-router-dom";
import "./MovieCard.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { toggleProductFromCart } from "../../../store/Slice/cart";
import {
  PopUpMsg,
  addToFavorites,
  deleteFromFavorites,
} from "../../../api/apiStream";
import { addToList, removeFromList } from "../../../store/Slice/videosSlice";
import Swal from "sweetalert2";
import { useRef } from "react";
import { setFavLoader } from "../../../store/Slice/favLoader";
export function MovieCard({ movie, isFav, type }) {
  const smFavIcon = useRef();
  const favLoader = useSelector((state) => state.favLoader);
  const cart = useSelector((state) => state.cart.cartList);
  const [inCart, setInCart] = useState(false);
  const allVids = useSelector((state) => state.videos);
  const favorites = [...allVids.favorites];
  const [isFavorite, setIsFavorite] = useState(isFav);
  const dispatch = useDispatch();
  const handleAddToCart = function (e) {
    if (localStorage.getItem("token")) {
      e.stopPropagation();
      if (inCart) setInCart(false);
      else setInCart(true);
      let obj = { ...movie, quantity: 1 };
      dispatch(toggleProductFromCart(obj));
    } else return PopUpMsg({ message: "Please Login First" });
  };
  const addToFav = function (e) {
    e.stopPropagation();
    if (!isFavorite) {
      addToFavorites(movie._id)
        .then((res) => {
          if (res) setIsFavorite(true);
        })
        .catch((error) => {
          dispatch(setFavLoader(false));
          return PopUpMsg(error);
        });
    } else {
      deleteFromFavorites(movie._id)
        .then((res) => {
          if (res) setIsFavorite(false);
          dispatch(removeFromList(movie));
        })
        .catch((error) => {
          dispatch(setFavLoader(false));
          return PopUpMsg(error);
        });
    }
  };
  const navigate = useNavigate();
  const moveToDetails = function () {
    if (localStorage.getItem("token")) {
      if (type === "video") navigate(`/movies/${movie._id}`);
      else if (type === "product") navigate(`/store/product/${movie._id}`);
      window.scrollTo(0, 0);
    } else return PopUpMsg({ message: "Please Login First" });
  };

  useEffect(() => {
    let isProductInCart = cart.find((product) => product._id === movie._id);
    if (isProductInCart) setInCart(true);
    let isMovieFav = favorites.find((obj) => obj.id === movie._id);
    if (isMovieFav) setIsFavorite(true);
  }, [cart, favorites]);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      style={{ userSelect: "none" }}
      onClick={favLoader ? () => "" : moveToDetails}
      className="movie_card p-0 m-2 mt-0 border-0 rounded-3 position-relative bg-transparent"
    >
      <div className="img-container position-relative  z-1">
        <div className="card-overlay d-flex justify-content-center align-items-center rounded-3 position-absolute top-0 start-0 w-100 h-100">
          <div className="card-btns text-center">
            <Button
              disabled={favLoader}
              onClick={addToFav}
              className={`my-1 ${type === "video" ? "" : "d-none"}`}
              variant="outline-secondary"
            >
              <i
                className={`fa-solid fa-${
                  favLoader ? "spinner fa-spin" : isFavorite ? "check" : "plus"
                }`}
              ></i>{" "}
              List
            </Button>
            <Button
              onClick={handleAddToCart}
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
          src={movie.poster_image || movie.images[0].secure_url}
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
