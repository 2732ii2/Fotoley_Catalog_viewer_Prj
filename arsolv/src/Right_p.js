import React, { useState } from 'react'
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
export default function Right_p() {
    var [state,setstate]=useState("on");
    console.log(state);
  return (
    <div className="Right_Side">
      <div id="r_up">
        <h1 id="r_h"> W Maldives</h1>
        <p id="r_p">
          Have you ever imagined living in a place surrounded by gorgeous sea
          views wherein you wake up to the shining rays of the sun, spend the
          day enjoying heart-throbbing activities and end the day with a fine
          dinner under the stars? We believe you did and would like to tell you
          that Como Cocoa Island, Maldives resort will turn this imagination of
          yours into reality. It offers such a beautiful experience that you
          would never want to leave! So, if you want to have a lifetime
          experience at this dreamy resort, plan your next trip to Maldives and
          book a Cocoa Island, Maldives package. And if youre concerned what to
          do there, leave it on us. In this guide, we are covering it all, take
          a look!
        </p>
      </div>
      <div id="r_down">
        <div
          onClick={() => {
            state === "on" ? setstate("off") : setstate("on");
          }}
          className="circle"
        >
          {state === "on" ? (
            <PauseIcon
              style={{ width: "50px", height: "50px", color: "white" }}
            />
          ) : (
            <PlayArrowIcon
              style={{ width: "50px", height: "50px", color: "white" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
