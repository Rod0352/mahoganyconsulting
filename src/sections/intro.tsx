import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { green, orangy, smallScreenGreen, smallScreenGreenText, smallScreenWhite } from "../components/colors";
import Header from "../components/Header";

const moh_red = require("../imgs/MOH_red.jpg");

const Intro = () => {
    return (
      <div
        style={{
          color: green,
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          height: "100vh",
        }}
      >
        <Header/>
        <div
          style={{
            marginTop: "70px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "100vh",
            fontFamily: "Arial",
            fontSize: "24px",
            // paddingRight: "100px",
            paddingRight: window.innerWidth < 600 ? "25px" : "100px",
            backgroundImage: `url(${moh_red})`,
            backgroundSize: "cover",
            backgroundPosition: "unset",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              height: 320,
              // width: 480,
              backgroundColor: window.innerWidth < 600 ? smallScreenGreen : green,
              // margin: "auto",
              margin: window.innerWidth < 600 ? "auto" : "",
              padding: "18px 0px 4px 18px",
              marginLeft: 4,
            }}
          >
            <Box
              sx={{
                // width: 480,
                height: 320,
                margin: "-9px -9px",
                backgroundColor:
                  window.innerWidth < 600 ? smallScreenWhite : "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                fontFamily: "Ysabeau SC, sans-serif",
                padding: 2,
              }}
            >
              <Typography
                variant="h3"
                style={{
                  textAlign: "center",
                  marginTop: 5,
                  color: window.innerWidth < 600 ? smallScreenGreenText : green,
                  textShadow: "rgb(0 0 0 / 18%) 1px 2px 1px",
                  fontFamily: "Ysabeau SC, sans-serif",
                }}
              >
                Dr. Mahogany Hall
              </Typography>
              <Typography
                variant="h5"
                style={{
                  textAlign: "center",
                  textShadow: "rgb(0 0 0 / 18%) 1px 2px 1px",
                  // color: orangy,
                  color: window.innerWidth < 600 ? smallScreenGreenText : green  ,
                  fontFamily: "Ysabeau SC, sans-serif",
                }}
              >
                Founder & CEO
              </Typography>
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  color: window.innerWidth < 600 ? smallScreenGreenText : green,
                  fontFamily: "Ysabeau SC, sans-serif",
                }}
              >
                Hall Counseling Services
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    borderRadius: 0,
                    margin: "0 auto",
                    backgroundColor: "transparent",
                    color: green,
                    border: "2px solid #e6a113",
                    fontWeight: "bold",
                    marginRight: window.innerWidth < 391 ? 0 : 10,
                  }}
                  // onclick scroll 100vh down
                  onClick={() => {
                    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                  }
                  }
                >
                  About Me
                </Button>
                <Button
                  variant="contained"
                  style={{
                    borderRadius: 0,
                    margin: "0 auto",
                    backgroundColor: "transparent",
                    color: window.innerWidth < 600 ? smallScreenGreenText : orangy,
                    // border: "2px solid #525704bd",
                    border: "2px solid",
                    borderColor:
                      window.innerWidth < 600 ? smallScreenGreenText : green,
                    fontWeight: "bold",
                  }}
                  // onclick scroll to bottom of page
                  onClick={() => {
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }
                  }
                >
                  Get in Touch
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    );
  };

export default Intro;