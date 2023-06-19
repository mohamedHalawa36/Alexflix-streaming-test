import React, { useEffect, useState } from "react";
import { CardsSlider } from "../Streaming Components//Cards Slider Component/CardsSlider";
import { Nav } from "../Navbar Components/Nav component/Nav";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllVids } from "../../store/Slice/videosSlice";
import { getAllProduct } from "../../api/apiEcommerce";
import "react-alice-carousel/lib/alice-carousel.css";
import "./home.css";
export function Home() {
  const [products,setProducts] = useState([])
  const allVids = useSelector((state) => state.videos);
  const dispatch = useDispatch();
  const movies = [...allVids.movies].sort((a, b) => b.rate - a.rate);
  const series = [...allVids.series].sort((a, b) => b.rate - a.rate);
  const animes = [...allVids.animes].sort((a, b) => b.rate - a.rate);
  useEffect(() => {
    getAllProduct().then((res)=>setProducts(res))
    dispatch(fetchAllVids());
  }, []);

  //Loader till the data arrive
  if (allVids.length === 0)
    return (
      <h1 className="w-100 h-100 text-light d-flex justify-content-center align-items-center">
        Loading....
      </h1>
    );

  return (
    <>
      <Nav positionStyle={"position-fixed top-0 start-0"} />
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide d-flex justify-content-center align-items-center"
        data-bs-ride="carousel"
        data-interval="3000"
      >
        <div className="carousel-inner">   
          {
            series.map((movie,index)=> {
              return (
                <div className={`carousel-item vh-100 ${index===0?"active":""}`} key={`carousel-${movie._id}`}>
            <img
              src={movie.cover_image}
              className="d-block w-100 h-100"
              alt="..."
            />
          </div>
              )
            })
          }

        </div>
        <div className="text ms-5 position-absolute start-0 top-50">
          <h1 id="welcome-msg" className="text-capitalize">
            welcome to <span className="text-uppercase">alexflix</span>
          </h1>
          <p id="description" className="fs-4">
            Millions of movies, TV shows,Animes and thier wonderfull products
          </p>
        </div>
      </div>
      <CardsSlider movies={movies} title={"top movies"} type={`video`} />
      <CardsSlider movies={series} title={"top series"} type={`video`} />
      <CardsSlider movies={animes} title={"top animes"} type={`video`} />
      <CardsSlider movies={products} title={"top products"} type={`product`} />

  
    </>
  );
}
