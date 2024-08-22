import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import { green, orangy } from "../components/colors";
import emailjs from "emailjs-com";
const moh_noBG = require("../imgs/betterBG.png");

const EMAILJS_TEMP = "template_f3ckzy6";
const EMAILJS_SERVICE = "service_wyv3jbp";
const EMAILJS_PUBLIC = "STUenfmd0o81qGDvg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm(EMAILJS_SERVICE, EMAILJS_TEMP, form!.current!, EMAILJS_PUBLIC)
      .then(
        (result) => {
          setLoading(false);
          alert("Dr. Hall will be in touch soon!");
          window.location.reload();
        },
        (error) => {
          setLoading(false);
          alert("An error occurred, Please try again. " + error.text);
        }
      );
  };

  return (
    <>
      <Typography
        variant="h4"
        style={{
          paddingTop: 60,
          color: green,
          textAlign: "center",
          fontFamily: "Ysabeau SC, sans-serif",
          width: "100%",
          margin: "auto",
        }}
      >
        Contact Dr. Hall Today
      </Typography>
      <Typography
        variant="body1"
        style={{
          color: green,
          textAlign: "center",
          fontFamily: "Ysabeau SC, sans-serif",
          width: "97%",
          margin: "auto",
        }}
      >
        Please fill out the form below to get in touch to schedule a
        consultation or to learn more about Dr.Halls services.
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${moh_noBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          // width: "100%",
          width: window.innerWidth < 600 ? "100%" : 500,
          height: 650,
          // bottom: 0,
        }}
      ></Box>
      <Box
        component="form"
        ref={form}
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 5,
          mb: 5,
          padding: 2,
          border: "1px solid #525704bd",
          boxShadow: "2px 2px 2px 1px #00000036",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label="First Name"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
            // fullWidth
            required
            margin="normal"
            sx={{ backgroundColor: "#ffffffc7", marginRight: 1 }}
          />
          <TextField
            label="Last Name"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            onChange={handleChange}
            // fullWidth

            required
            margin="normal"
            sx={{ background: "#ffffffc7", marginLeft: 1 }}
          />
        </Box>
        <TextField
          label="Phone"
          id="phone"
          name="phone"
          value={formData.phone}
          type="tel"
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          sx={{ background: "#ffffffc7" }}
        />
        {/* </Box>   */}
        <TextField
          label="Email"
          id="email"
          name="email"
          value={formData.email}
          type="email"
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          sx={{
            backgroundColor: "#ffffffc7",
          }}
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          required
          margin="normal"
          sx={{ backgroundColor: "#ffffffc7" }}
        />
        <Button
          type="submit"
          variant="contained"
          // color="primary"
          fullWidth
          sx={{ mt: 2, backgroundColor: green, color: "white" }}
        >
          {loading ? (
            <CircularProgress
              size={24}
              sx={{
                color: "white",
              }}
            />
          ) : (
            "Send"
          )}
        </Button>
      </Box>
      {/* Copyright */}
      <Typography
        variant="subtitle1"
        style={{
          zIndex: 111111,
          color: green,
          textAlign: "center",
          fontFamily: "Ysabeau SC, sans-serif",
          width: "100%",
          margin: "auto",
          bottom: 0,
        }}
      >
        © 2024 Mahogany Consulting. All rights reserved.
      </Typography>
    </>
  );
};

export default Contact;
