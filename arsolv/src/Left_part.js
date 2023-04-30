import React from 'react'
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Img from "./d1.jpg";
export default function Left_part() {
  return (
    <div className="Left_Side">
      <div id="l_up">
        <img src={Img} style={{ width: "100%", height: "100%" }} />
      </div>
      <div id="l_down">
        <div id="first">
          {" "}
          <ArrowLeftIcon style={{ width: "100px", height: "100px" }} />{" "}
        </div>
        <div id="second">
          <div id="one"></div>
          <div id="one"></div>
          <div id="one"></div>
          <div id="one"></div>
          <div id="one"></div>
        </div>
        <div id="third">
          {" "}
          <ArrowRightIcon style={{ width: "100px", height: "100px" }} />{" "}
        </div>
      </div>
    </div>
  );
}
