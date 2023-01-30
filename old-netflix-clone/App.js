import React, { Fragment } from "react";
import "./App.css";
import {
  Banner,
  DefaultLayout,
  Footer,
  Header,
  Home,
  Notfound,
  Search,
  Section,
  Shows,
  SingleShow,
} from "./components";
import { GlobalStyle } from "./components/globalElements";
import { requests } from "./components/data/requests";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="movie"
          element={
            <Shows title="Movie" fetchUrl="discover/movie" showType="movie" />
          }
        />
        <Route
          path="movie/:id"
          element={
            <SingleShow
              title="Movie"
              fetchUrl="discover/movie"
              showType="movie"
            />
          }
        />
        <Route
          path="tv-series"
          element={
            <Shows title="Tv Series" fetchUrl="discover/tv" showType="tv" />
          }
        />
        <Route
          path="tv/:id"
          element={
            <SingleShow title="Tv" fetchUrl="discover/tv" showType="tv" />
          }
        />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />
    </Fragment>
  );
};

export default App;
