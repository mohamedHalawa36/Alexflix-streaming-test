import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AdminGaurdRouter from "./AdminGaurdRouter.jsx";
import NotFound from "./../components/NotFound";

import Login from "./../pages/AccountPages/Login";
import Register from "./../pages/AccountPages/Register";
import RecoverPassword from "./../pages/AccountPages/RecoverPassword";
import ResetPassword from "./../pages/AccountPages/ResetPassword";
import ConfirmEmail from "../components/ConfirmEmail";
import UserGaurdRouter from "./UserGaurdRouter.jsx";
import { Home } from "../pages/Home.jsx";
import { HomeGuard, LoginGuard } from "../guards/AuthGuards.js";
import AddUser from "../pages/AdminPages/AddUser";
import AddMovie from "../pages/AdminPages/AddMovie";
import AddProduct from "../pages/AdminPages/AddProduct";
import UserList from "../pages/AdminPages/UserList";
import MoviesList from "../pages/AdminPages/MoviesList";
import ProductsList from "../pages/AdminPages/ProductsList";
import OrdersList from "../pages/AdminPages/OrdersList";
import ReviewsList from "../pages/AdminPages/ReviewsList";

// E-Commerce
import Cart from "./../pages/ProductPages/Cart";
import Store from "./../pages/ProductPages/Store";
import ProductDetails from "./../pages/ProductPages/ProductDetails";
import UserOrders from "./../pages/ProductPages/UserOrders";
//Stream
import Movies from "../pages/StreamPages/Movies.jsx";
import MovieDetails from "../pages/StreamPages/moviePage.jsx";
import Favorites from "../pages/StreamPages/Favorites.jsx";
import Animes from "../pages/StreamPages/Anime.jsx";
import Series from "../pages/StreamPages/Series.jsx";
import ChangePassword from "./../pages/AccountPages/ChangePassword";
import Profile from "./../pages/AccountPages/Profile";
import Settings from "../pages/AccountPages/Settings";

export default function Router() {
  return (
    <>
      <Routes>
        <Route element={<AdminGaurdRouter />}>
          <Route path="/userList" element={<UserList />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/addMovie" element={<AddMovie />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/moviesList" element={<MoviesList />} />
          <Route path="/productsList" element={<ProductsList />} />
          <Route path="/ordersList" element={<OrdersList />} />
          <Route path="/reviewsList" element={<ReviewsList />} />
        </Route>
        {/* E-Commerce */}
        <Route path="/store" element={<UserGaurdRouter />}>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/store/cart" element={<Cart />}></Route>
          <Route path="/store/product/:id" element={<ProductDetails />}></Route>
          <Route path="/store/search" element={<Store />}></Route>
        </Route>

        {/* Stream */}
        <Route element={<UserGaurdRouter />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/anime" element={<Animes />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/user/orders" element={<UserOrders />}></Route>
        </Route>
        <Route
          path="/"
          element={
            <HomeGuard>
              <Home />
            </HomeGuard>
          }
        />

        <Route
          path="/login"
          element={
            <LoginGuard>
              <Login />
            </LoginGuard>
          }
        />
        <Route
          path="/register"
          element={
            <LoginGuard>
              <Register />
            </LoginGuard>
          }
        />
        <Route
          path="/recoverPassword"
          element={
            <LoginGuard>
              <RecoverPassword />
            </LoginGuard>
          }
        />
        <Route
          path="/resetPassword/:id"
          element={
            <LoginGuard>
              <ResetPassword />
            </LoginGuard>
          }
        />
        <Route
          path="/confirmEmail"
          element={
            <LoginGuard>
              <ConfirmEmail />
            </LoginGuard>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}