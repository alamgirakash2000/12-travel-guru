import React, { useState, UseEffect } from "react";
import "./App.css";
import { auth } from "./firebase/Config";

import { HashRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Place from "./pages/Place/Place";
import Details from "./pages/Details/Details";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const [user, setUser] = useState({});
  const [selectPlace, setSelectPlace] = useState({});
  return (
    <Router>
      <Header />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/">
          <Home place={selectPlace} setSelectPlace={setSelectPlace} />
        </Route>
        <Route path="/login">
          <SignUp user={user} setUser={setUser} />
        </Route>
        <Route path="/place/:placeId">
          <Place />
        </Route>
        <PrivateRoute user={user} path="/details/:placeId">
          <Details />
        </PrivateRoute>
      </AnimatedSwitch>
    </Router>
  );
}

export default App;
