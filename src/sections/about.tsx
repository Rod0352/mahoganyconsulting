import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { green, orangy } from "../components/colors";
import { School } from "@mui/icons-material";
const moh_yellow = require("../imgs/MOH_yellow2.jpg");
const adrticle = require("../imgs/article1.png");
const Podcast = require("../imgs/Podcast1.png");
const nofaceart = require("../imgs/nofaceart.png");

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
          alignItems: "center",
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
          marginLeft: 4,
          marginRight: 4,
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
            marginRight: window.innerWidth < 600 ? 8 : 0,
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
            marginLeft: window.innerWidth < 600 ? 18 : 0,
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
          boxShadow: "2px 2px 2px 1px #00000036",
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
            boxShadow:"10px 10px 20px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(0, 0, 0, 0.3)",
            marginBottom: 3,
            // onHover: { backgroundColor: green)
            transition: "transform 0.2s",
            ":hover": {
              transform: "scale(1.1)",
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
                  "https://blackgirlnerds.com/black-lgbtq-mental-health-matters-a-conversation-with-mental-health-expert-dr-mahogany-hall/",
                  "_blank"
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
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.2s",
            ":hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <CardMedia sx={{ height: 200 }} image={Podcast} title="" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Podcast Interview with Dr. Mahogany Hall that discusses the impact
              of mental health while building a successful business
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
                  "https://iamceo.co/2024/02/17/iam2014-founder-and-therapist-promotes-mental-health-while-building-a-successful-business/",
                  "_blank"
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
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(0, 0, 0, 0.3)",
            border: `2px solid ${green}`,
            transition: "transform 0.2s",
            ":hover": {
              transform: "scale(1.1)",
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
                  "https://blackgirlnerds.com/5-steps-for-self-care-when-your-dream-wellness-vacation-turns-into-a-nightmare/",
                  "_blank"
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

export default About;
