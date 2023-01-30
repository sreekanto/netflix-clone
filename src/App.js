import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, Layout, ShowPage, ShowsPage } from "./components";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShowsPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="tv" element={<ShowsPage />}>
            <Route path=":showId" element={<ShowPage />} />
          </Route>
          <Route path="movie" element={<ShowsPage />}>
            <Route path=":showId" element={<ShowPage />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
