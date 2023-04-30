import React from 'react'
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Img1 from "./d3.jpg";

import Img2 from "./d2.jpg";
import Img3 from "./d1.jpg";


import Img4 from "./d4.jpg";

import Img5 from "./d5.jpg";

export default function Left_part() {
  return (
    <div className="Left_Side">
      <div id="l_up">
        <img src={Img3} style={{ width: "100%", height: "100%" }} />
      </div>
      <div id="l_down">
        <div id="first">
          {" "}
          <ArrowLeftIcon style={{ width: "100px", height: "100px" }} />{" "}
        </div>
        <div id="second">
          <div id="one">
            <img src={Img1} style={{ width: "100%", height: "100%" }} />
          </div>
          <div id="one">
            <img src={Img2} style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="so" id="one">
            <img src={Img3} style={{ width: "100%", height: "100%" }} />
          </div>
          <div id="one">
            <img src={Img4} style={{ width: "100%", height: "100%" }} />
          </div>
          <div id="one">
            <img src={Img5} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div id="third">
          {" "}
          <ArrowRightIcon style={{ width: "100px", height: "100px" }} />{" "}
        </div>
      </div>
    </div>
  );
}
