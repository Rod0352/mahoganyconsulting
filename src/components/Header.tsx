// import react
import React, { useEffect, useState } from "react";
import { green } from "../components/colors";
import { Typography } from "@mui/material";
import TemporaryDrawer from "./DrawerMenu";
const logo = require("../imgs/logo-removebg.png");
const Header = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    let timeout: any;

    const handleScroll = () => {
      clearTimeout(timeout);
      setIsScrolling(true);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        color: green,
        zIndex: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // height: "70px",
        fontFamily: "Arial",
        fontSize: "20px",
        fontWeight: "bold",
        position: "fixed",
        width: "100%",
        backgroundColor: "white",
        boxShadow: "2px 2px 2px 1px #00000036",
        padding: 5,
        //SETting height to 0 if page is scrolling and 70 if not, smooth transition
        transition: "height 0.5s",
        // height: isScrolling ? "0" : "70px",
        //check if were at the top of the page, if we are, set height to 70px, else 0
        height: isScrolling ? "0" : "70px",
      }}
    >
      {window.innerWidth < 600 ? (
        <img
          src={logo}
          style={{
            height: isScrolling ? "0" : "70px",
            transition: "height 0.5s",
            marginLeft: "20px",
          }}
          onClick={() => window.scrollTo({ top:0, behavior: "smooth" })}
        />
      ) : (
        <Typography
          variant="h4"
          style={{
            marginLeft: "20px",
            fontWeight: "lighter",
            fontFamily: "Ysabeau SC, sans-serif",
            display: isScrolling ? "none" : "block",
          }}
         
        >
          Mahogany Consulting{" "}
        </Typography>
      )}
      {/* <TemporaryDrawer />
       */}
      {!isScrolling ? <TemporaryDrawer /> : null}
    </div>
  );
};

export default Header;
