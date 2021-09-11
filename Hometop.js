import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Button, IconButton } from "@material-ui/core";
import "./Hometop.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Mobilesidebar from "./Mobilesidebar";

const Hometop = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="hometop">
      <div className="arrowsign">
        <ArrowBackIosIcon className="arrow" />
        <ArrowForwardIosIcon className="arrow" />
      </div>
      <div>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button
            className="button"
            style={{
              width: "130px",
              borderRadius: "20px",
              color: "white",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            SIgn up
          </Button>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button
            className="button"
            style={{
              backgroundColor: "White",
              marginLeft: "10px",
              marginRight: "20px",
              width: "130px",
              borderRadius: "20px",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            Log In
          </Button>
        </Link>
      </div>
      <div className="menubutton">
        <IconButton>
          <MenuIcon style={{ color: "white" }} onClick={toggleDrawer} />
        </IconButton>
        <Drawer
          style={{ backgroundColor: "#040404" }}
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
        >
          <Mobilesidebar />
        </Drawer>
      </div>
    </div>
  );
};

export default Hometop;
