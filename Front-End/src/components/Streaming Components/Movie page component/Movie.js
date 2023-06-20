import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "../Rating Component/Rating";
import Modal from "react-bootstrap/Modal";
import "react-tuby/css/main.css";
import { Player } from "react-tuby";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Reviews from "../Reviews Component/Reviews";
import "./movie.css";
import { CardsSlider } from "../../Streaming Components//Cards Slider Component/CardsSlider";
import { searchProduct, getProductById } from "./../../../api/apiEcommerce";
import { getMovie } from "./../../../api/apiMovies";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const [products, setProducts] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const [typing, setTyping] = useState(true);

  const params = useParams();
  const playerRef = useRef(null);
  useEffect(() => {
    getMoviedetails();
  }, []);

  async function getMoviedetails() {
    getMovie(params.id)
      .then((res) => {
        setMovieDetails(res.data);
        return res.data;
      })
      .then(async (movie) => {
        let products = [];
        for (let id of movie.products) {
          await getProductById(id).then((data) => {
            products.push(data);
          });
        }
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <div>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <Modal.Header closeButton>welcome</Modal.Header> */}
          <Modal.Body>
            <div className="ratio ratio-16x9">
              <iframe
                closeButton
                src="https://www.youtube.com/embed/sfAc2U20uyg?autoplay=1"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

  return (
    <div
    id="movie-details-page"
      className="movie-details-container position-relative"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 26, 54, 0.8), rgba(8, 26, 54, 0.8)) , url(${movieDetails.cover_image})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className=" container"
        onKeyDown={(e) => {
          if (e.key === " " && e.target.localName === "div") {
            setTyping(true);
          }
        }}
        tabIndex={0}
      >
        <div
          className="movie-card mb-3 cardDetails custom-card my-5"
          style={{ backgroundColor: "transparent" }}
        >
          <div className=" row g-0">
            <div
              id="poster-container"
              className="text-center text-lg-start col-lg-4 position-relative"
            >
              <img
                src={`${movieDetails.poster_image}`}
                className="img-fluid rounded-start h-100 w-100"
                alt="..."
              />
              <div
                className=" position-absolute top-0 end-0 m-2 "
                style={{ width: "15%", fontWeight: "bold" }}
              >
                <CircularProgressbar
                  value={movieDetails.rate}
                  maxValue={10}
                  text={`${movieDetails.rate}`}
                  background="true"
                  styles={buildStyles({
                    textSize: "2rem",
                    pathTransitionDuration: 0.5,
                    pathColor: `#00d0c5`,
                    textColor: "#00d0c5",
                    trailColor: "#d6d6d6",
                    backgroundColor: "rgba(8, 26, 54, 0.8)",
                  })}
                />
              </div>
            </div>
            <div id="movie-data-container" className="ps-3 col-lg-8">
              <div className="card-body">
                <h1 className="card-title p-3 text-center text-lg-start">
                  {movieDetails.name}
                </h1>
                <div className=" py-2  p-3 my-2">
                  <div className="IconsInDetails-container">
                    {/* <Rating movie={movieDetails} /> */}
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => setModalShow(true)}
                      className="IconsInDetails text-center text-lg-start"
                    >
                      <i
                        className="fa-solid fa-play fa-2x fs-4 "
                        style={{
                          color: "#00d0c5",
                        }}
                      ></i>
                      <span
                        className=" text-capitalize"
                        style={{
                          fontSize: 20,
                          color: "#00d0c5",
                          paddingLeft: "0.23em",
                        }}
                      >
                        watch Trailer
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className=" p-3">Overview</h3>
                <p className="card-text p-3">{movieDetails.description}</p>
                <div>
                  <p className="card-text  p-3 py-2">
                    <small className="text-white-50">
                      <span className="text-white">Release date : </span>
                      {movieDetails.production_year}
                    </small>{" "}
                  </p>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* video player */}
        <div>
          <div>
            <Player
              keyboardShortcut={{
                pause: typing,
                forward: typing,
                rewind: typing,
                fullScreen: false,
                mute: typing,
                subtitle: typing,
              }}
              ref={playerRef}
              src={[
                {
                  quality: "Full HD",
                  url: "http://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/1080.mp4",
                },
                {
                  quality: 720,
                  url: "https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/720.mp4",
                },
                {
                  quality: 480,
                  url: "https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/480.mp4",
                },
              ]}
              poster={movieDetails.cover_image}
              controls
              // keyboard
              fullScreenOnDoubleClick
            />
          </div>
        </div>{" "}
        {products.length > 0 && (
            <CardsSlider
              movies={products}
              title={"Related Products"}
              type={`product`}
            />
        )}
        <Reviews typing={typing} setTyping={setTyping} />
      </div>
    </div>
  );
}
