import React, { useState, useEffect } from "react";
import "./App.css";
import TemporaryDrawer from "./components/DrawerMenu";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { School } from "@mui/icons-material";
const moh_red = require("./imgs/MOH_red.jpg");
const moh_yellow = require("./imgs/MOH_yellow2.jpg");
const moh_group = require("./imgs/group.png");
const moh_noBG = require("./imgs/betterBG.png");
const adrticle = require("./imgs/article1.png");
const Podcast = require("./imgs/Podcast1.png");
const nofaceart = require("./imgs/nofaceart.png");
const green = "#525704bd";
const orangy = "#e6a113";

const smallScreenWhite = "#ffffffb8";
const smallScreenGreen = "#5257044f";

const smallScreenGreenText = "rgb(82 87 4)";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  
  // check if scroll stopped
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     setIsScrolling(window.scrollY > 0);
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => window.removeEventListener('scroll', handleScroll);
      
    // }, []);

    useEffect(() => {
      let timeout: any;
  
      const handleScroll = () => {
        clearTimeout(timeout);
        setIsScrolling(true);
  
        timeout = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  return (
    <div
    style={{
        color: green,
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
                padding : 5,
        //SETting height to 0 if page is scrolling and 70 if not, smooth transition
        transition: "height 0.5s",
        // height: isScrolling ? "0" : "70px",
        //check if were at the top of the page, if we are, set height to 70px, else 0
        height: isScrolling ? "0" : "70px",


      }}
    >
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
      {/* <TemporaryDrawer />
       */}
       {!isScrolling ? <TemporaryDrawer /> : null}
    </div>
  );
};

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
          paddingRight: "100px",
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

const About = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        style={{
          marginTop: 10,
          textAlign: "center",
          color: green,
          fontFamily: "Ysabeau SC, sans-serif",
        }}
      >
        Counseling, Coaching, Consulting
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          margin: 7,
        }}
      >
        <Box
          sx={{
            width: 410,
            height: 410,
            // padding: 20,
            backgroundColor: orangy,

          }}  
        >
          <Box
            sx={{
              backgroundImage: `url(${moh_yellow})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              margin: "-9px -9px",
              overflow: "hidden",
              // width: 410,
              height: 410,
                boxShadow: "2px 2px 2px 1px #00000036",
              // margin: "auto",
            }}
          ></Box>
        </Box>

        <Typography
          variant="body1"
          style={{
            textAlign: "center",
            margin: "auto",
            marginTop: 20,
            // width: "50%",
            // is this flexed, if yes 100% else 50%
            width: window.innerWidth > 600 ? "50%" : "100%",
            alignSelf: "center",
            color: green,
            fontFamily: "Ysabeau SC, sans-serif",
          }}
        >
          Dr. Mahogany Hall has acquired over 21 years of professional
          experience assisting clients with individual, couples and family
          challenges. She is licensed in the Washington DC metro area and
          provides coaching and consulting nationwide. She is the Founder and
          CEO of Hall Counseling Services, a medical group practice most known
          for its diverse team of clinicians. The focus of Dr. Hall’s clinical,
          academic and consulting work is the impact of racism on mental health,
          human relationships and professional careers. To address such issues,
          she co-developed a psychotherapy and race-based yoga program called
          Healing the Whole. Her worked has been featured in Black Girl Nerds,
          Earn Your Leisure (University) and IAMCEO Podcast. Dr. Hall has
          created mental health webinars and spoken at various events, including
          those at universities, community retreats and professional
          organizations. In the near future, she will be speaking at InvestFest
          2024, an event in Atlanta, GA hosted by Steve Harvey and Earn Your
          Leisure. She has also worked with politicians and clients in the
          Entertainment industries.
        </Typography>
      </Box>
      <Typography
        variant="h4"
        style={{
          color: green,
          // margin: "auto",
          fontFamily: "Ysabeau SC, sans-serif",
          // width: "100%",
          marginLeft : 4, 
          marginRight : 4,
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 1,
        }}
      >
        Professional Associations
      </Typography>
      <Box
        sx={{
          marginTop: 2,
          marginBottom: 3,
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          style={{
            color: green,
            margin: 7,
            fontFamily: "Ysabeau SC, sans-serif",
            maxWidth: 290,
            marginTop: 12,
            marginBottom: 12,
          }}
        >
          National Association of Social Workers
        </Typography>
        <Typography
          variant="h6"
          style={{
            color: green,
            margin: 7,
            fontFamily: "Ysabeau SC, sans-serif",
            maxWidth: 290,
            marginTop: 12,
            marginBottom: 12,
            // marginRight: 8,
            marginRight : window.innerWidth < 600 ? 8 : 0,
          }}
        >
          Therapy for Black Girls
        </Typography>
        <Typography
          variant="h6"
          style={{
            color: green,
            margin: 7,
            fontFamily: "Ysabeau SC, sans-serif",
            maxWidth: 290,
            marginTop: 12,
            marginBottom: 12,
            // marginLeft: 18,
            marginLeft : window.innerWidth < 600 ? 18 : 0,
          }}
        >
          Psychology Today
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: 15,
          // height: 80,
          // backgroundColor: orangy,
          borderTop: `2px solid ${green}`,
          borderBottom: `2px solid ${green}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow : "2px 2px 2px 1px #00000036"
          // margin: "auto",
        }}
      >
        <Typography
          variant="h3"
          style={{
            color: green,
            margin: "auto",
            marginTop: 5,
            marginBottom: 5,
            fontWeight: "medium",
            fontFamily: "Ysabeau SC, sans-serif",
            maxWidth: 290,
          }}
        >
          as seen on
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          // height: 200,

          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "auto",
          marginTop: 10,
          marginBottom: 10,
          alignContent: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 295,
            border: `2px solid ${green}`,
            marginTop: 3,
            boxShadow: "0px 82px 108px -20px #bdbdbd",
            marginBottom: 3,
            // onHover: { backgroundColor: green)
            'transition': 'transform 0.2s',
            ':hover': {
              transform: 'scale(1.1)',
            },
          }}
        
        >
          <CardMedia
            sx={{ height: 200 }}
            image={adrticle}
            title="Contemplative Re-Imagining: A Conversation with Dr. Mahogany Hall"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Black LGBTQ+ Mental Health Matters: A Conversation with Mental
              Health Expert Dr. Mahogany Hall{" "}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              backgroundColor: green,
            }}
          >
            <Button
              size="small"
              style={{
                color: "white",
              }}
              onClick={() =>
                window.open(
                  "https://blackgirlnerds.com/black-lgbtq-mental-health-matters-a-conversation-with-mental-health-expert-dr-mahogany-hall/"
                )
              }
            >
              View
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            maxWidth: 295,
            border: `2px solid ${green}`,
            marginTop: 3,
            marginBottom: 3,
            boxShadow: "0px 82px 108px -20px #bdbdbd",
            'transition': 'transform 0.2s',
            ':hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <CardMedia sx={{ height: 200 }} image={Podcast} title="" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Podcast Interview with Dr. Mahogany Hall that discusses the impact
              of mental health while building a successful buesiness
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              backgroundColor: green,
            }}
          >
            <Button
              size="small"
              style={{
                color: "white",
              }}
              onClick={() =>
                window.open(
                  "https://iamceo.co/2024/02/17/iam2014-founder-and-therapist-promotes-mental-health-while-building-a-successful-business/"
                )
              }
            >
              View
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            maxWidth: 295,
            marginTop: 3,
            marginBottom: 3,
            boxShadow: "0px 82px 108px -20px #bdbdbd",
            border: `2px solid ${green}`,
            'transition': 'transform 0.2s',
            ':hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <CardMedia sx={{ height: 200 }} image={nofaceart} title="" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              5 Steps for Self-Care When Your Dream Wellness Vacation Turns into
              a Nightmare
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              backgroundColor: green,
            }}
          >
            <Button
              size="small"
              style={{
                color: "white",
              }}
              onClick={() =>
                window.open(
                  "https://blackgirlnerds.com/5-steps-for-self-care-when-your-dream-wellness-vacation-turns-into-a-nightmare/"
                )
              }
            >
              View
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box
        sx={{
          width: "100%",
          // height: 200,
          // paddingLeft: 2,
          textAlign: "center",
          backgroundColor: green,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          paddingBottom: 3,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: "white",
            // margin: "auto",
            fontFamily: "Ysabeau SC, sans-serif",
            maxWidth: 290,
            margin: 7,
          }}
        >
          Qualifying Experience and Training
        </Typography>
        <Box>
          <School
            sx={{
              color: "white",
            }}
          />
          <Typography
            variant="body1"
            style={{
              color: "white",
              margin: 7,
              fontFamily: "Ysabeau SC, sans-serif",
              maxWidth: 290,
              marginTop: 10,
            }}
          >
            B.A., University of North Carolina at Chapel Hill, Psychology +
            African & African American Studies
          </Typography>
        </Box>
        <Box>
          <School
            sx={{
              color: "white",
            }}
          />
          <Typography
            variant="body1"
            style={{
              color: "white",
              margin: 7,
              fontFamily: "Ysabeau SC, sans-serif",
              maxWidth: 290,
              marginTop: 10,
            }}
          >
            M.S.W, University of North Carolina at Charlotte, Social Work
          </Typography>
        </Box>
        <Box>
          <School
            sx={{
              color: "white",
            }}
          />
          <Typography
            variant="body1"
            style={{
              color: "white",
              margin: 7,
              fontFamily: "Ysabeau SC, sans-serif",
              maxWidth: 290,
            }}
          >
            D.S.W, University of Southern California, Social Work
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

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
              backgroundColor: orangy,
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
              backgroundColor: orangy,
              boxShadow: "2px 2px 2px 1px #00000036",
            }}
          >
            <Typography
              variant="h4"
              style={{
                width: "100%",
                margin: "1px",
                textAlign: "center",
                color: '#525704bd',
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
              backgroundColor: orangy,
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
              backgroundColor: orangy,
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
function App() {
  // #438e5d

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <Intro />
      <About />
      <Services />
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
          width: "100%",
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
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          sx={{ background: "#ffffffc7" }}
        />
        {/* </Box>   */}
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
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
          sx={{ mt: 2, backgroundColor: orangy, color: "white" }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}

export default App;
