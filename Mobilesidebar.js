import React from "react";
import { Link } from "react-router-dom";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@material-ui/core";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";

const Mobilesidebar = () => {
  const notify = () =>
    toast(
      <div>
        <h4>you need to login or sign up to use this feature</h4>
        <br />
        <br />
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button>Log In</Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button style={{ backgroundColor: "black", color: "white" }}>
            Sign Up
          </Button>
        </Link>
      </div>
    );
  return (
    <div>
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="logo"
      />
      <Link to="/" style={{ textDecoration: "none" }}>
        <SidebarOptions
          className="sidebaroption"
          Icon={HomeIcon}
          title="Home"
        />
      </Link>
      <Link to="/search" style={{ textDecoration: "none" }}>
        <SidebarOptions
          className="sidebaroption"
          Icon={SearchIcon}
          title="Search"
        />
      </Link>
      <div onClick={notify}>
        <SidebarOptions Icon={LibraryMusicIcon} title="Your library" />
      </div>
      <br />
      <div onClick={notify}>
        <SidebarOptions Icon={AddIcon} title="Create Playlist" />
      </div>
      <div onClick={notify}>
        <ToastContainer />
        <SidebarOptions Icon={FavoriteIcon} title="Liked songs" />
      </div>
    </div>
  );
};

export default Mobilesidebar;
