import React from "react";
const main_headshot = require("../imgs/MOH_yellow2.jpg");


export default function MainPic() {
  return (
    <div
    style={{
      border: "10px solid #407F3D",
      width: "50%",
      height : "50%"
    }}
  >
    <div
      style={{
        border: "1px solid #407F3D",
        width: "100%",
        height: "100%",
        margin: "-22px -22px 0px 0px",
      }}
    >
      <img
        src={main_headshot}
        alt="headshot"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
  );
}