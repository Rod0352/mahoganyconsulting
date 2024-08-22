import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { green, orangy } from "../components/colors";
const moh_group = require("../imgs/group.png");

const Services = () => {
  return (
    <Box
      sx={{
        // height: "70vh",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        borderBottom: "1px solid #525704bd",
      }}
    >
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          marginTop: 10,
          color: green,
          fontFamily: "Ysabeau SC, sans-serif",
          padding: 12,
        }}
      >
        offering a range of services to meet your needs
      </Typography>
      <Typography
        variant="body1"
        style={{
          textAlign: "center",
          color: green,
          fontFamily: "Ysabeau SC, sans-serif",
          width: "94%",
          margin: "auto",
        }}
      >
        If you would like to learn more about the services offered by Dr. Hall, see the contact section at the bottom to schedule a consultation!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          margin: 7,
          width: "100%",

          justifyContent: " space-around",
        }}
      >
        <Box
          sx={{
            maxWidth: 500,
            height: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              maxWidth: 500,
              backgroundColor: green,
              boxShadow: "2px 2px 2px 1px #00000036",
            }}
          >
            <Typography
              variant="h4"
              style={{
                width: "100%",
                margin: "1px",
                textAlign: "center",
                color: "#525704bd",
                backgroundColor: "white",
                fontFamily: "Ysabeau SC, sans-serif",
              }}
            >
              Individual, Couples &amp; Family Therapy
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: 500,
              backgroundColor: green,
              boxShadow: "2px 2px 2px 1px #00000036",
            }}
          >
            <Typography
              variant="h4"
              style={{
                width: "100%",
                margin: "1px",
                textAlign: "center",
                color: "#525704bd",
                backgroundColor: "white",
                fontFamily: "Ysabeau SC, sans-serif",
              }}
            >
              Consulting
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: 500,
              backgroundColor: green,
              boxShadow: "2px 2px 2px 1px #00000036",
            }}
          >
            <Typography
              variant="h4"
              style={{
                width: "100%",
                margin: "1px",
                textAlign: "center",
                color: "#525704bd",
                backgroundColor: "white",
                fontFamily: "Ysabeau SC, sans-serif",
              }}
            >
              Speaking Engagements
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: 500,
              backgroundColor: green,
              marginBottom: 5,
              boxShadow: "2px 2px 2px 1px #00000036",
            }}
          >
            <Typography
              variant="h4"
              style={{
                width: "100%",
                margin: "1px",
                textAlign: "center",
                color: "#525704bd",
                backgroundColor: "white",
                fontFamily: "Ysabeau SC, sans-serif",
              }}
            >
              Partnerships
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // maxWidth: 500,
            width: window.innerWidth < 600 ? "92%" : 500,
            height: 400,
            backgroundColor: green,
            marginLeft: window.innerWidth < 600 ? "auto" : "",
            marginRight: window.innerWidth < 600 ? "auto" : "",
            boxShadow: "2px 2px 2px 1px #00000036",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${moh_group})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              margin: "-9px -9px",
              // width: 500,
              width: window.innerWidth < 600 ? "99%" : 500,
              // marginLeft: "auto",
              // marginRight: "auto",
              height: 400,
              // margin: "auto",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
