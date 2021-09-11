import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
  Button,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import "./Hometop.css";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Mobilesidebar from "./Mobilesidebar";

const Searchtop = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="searchtop">
      <div className="arrowsign">
        <ArrowBackIosIcon className="arrow" />
        <ArrowForwardIosIcon className="arrow" />
      </div>
      <div>
        <Input
          className="search"
          disableUnderline
          placeholder="Artists, songs, or podcasts"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon style={{ marginLeft: "10px" }} />
            </InputAdornment>
          }
        />
      </div>
      <div className="signinup">
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

export default Searchtop;
