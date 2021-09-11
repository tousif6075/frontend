import React from "react";
import "./Home.css";
import Homecard from "./Homecard";
import Hometop from "./Hometop";

const Home = () => {
  return (
    <div className="body">
      <Hometop />
      <div className="container">
        <Homecard />
      </div>
    </div>
  );
};

export default Home;
