import React from "react";
import Searchtop from "./Searchtop";
import "./Home.css";
import BrowseCard from "./Browsecard";

const Searchhome = () => {
  return (
    <div className="body">
      <Searchtop />
      <br />
      <div className="container">
        <BrowseCard />
      </div>
    </div>
  );
};

export default Searchhome;
