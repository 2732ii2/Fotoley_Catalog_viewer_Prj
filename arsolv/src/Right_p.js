import React, { useState } from 'react'
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useSelector } from 'react-redux';
export default function Right_p() {
    var [state,setstate]=useState("on");
 var value = useSelector((value) => value);
    // console.log(value);
    console.log(state);
  return (
    <div className="Right_Side">
      <div id="r_up">
        <h1 id="r_h">
          {value === 0
            ? "Mountains"
            : value === 1
            ? "Pink Sky"
            : value === 2
            ? "Volcano Mountains"
            : value === 3
            ? "Beaches"
            : value === 4
            ? "Nature"
            : "Nature"}
        </h1>
        <p id="r_p">
          {value === 0
            ? "I have never in my life claimed to be an adventurer or outdoors lover  until I started hiking in the mountains. With the lovely, lush green forests and foothills, the tantalizing teal lakes hidden away like a secret prize waiting to be found, and those stunning sky-high jagged peaks, it was love at first sight. But more than that, hiking in the mountains became an immediate passion because of the way it made me feel. I was able to just be the real me and connect with the version of myself that felt the most authentic and true."
            : value === 1
            ? "Take a long hot bath, light some candles, throw in your favourite bath bomb..Watch your favourite Rom-Com (my go to is Notting Hill)Paint your nailsPut on your favourite face maskCurl your hair, try out some new styles maybe even get some inspo online, Pinterest is great for this kind of thingTake a bomb-ass selfie and…"
            : value === 2
            ? "I should really rename this blog to something a bit more representative of my posts, how about travelling the world with a UV camera? The location this time was pretty exciting, the chance to work at Kilauea alongside the USGS (United States Geological Survey) to install one of our UV cameras into the monitoring network. Since 2016 at Sheffield we have been working on our Raspberry Pi UV Cameras. We have now got to the point that these cameras can now be placed out permanently to collect long time series datasets, thanks to the work of Tom Wilkes. Our cameras are now in place, operating remotely in three locations worldwide - Reventador (Ecuador), Lastarria (Chile), and Lascar (Chile). Next up Kilauea, but this represented the next step in our UV camera journey, adding telemetry of data, so that data is collected and (hopefully!) processed in almost real-time. On a personal level, the chance to see one of the most active volcanic sites in the world was also a strong draw."
            : value == 3
            ? "If ultimately what youre trying to decide is whether something simple like a road trip or a tropical beach vacation would be best for you, then there are a couple of questions you might want to ask yourself. Among these are, would you prefer to pack up your car and hit the open road with family? Or do you want to enjoy relaxing for days on end on white, sandy beaches? While these are completely different experiences, both can involve exploring new places and having a great time with the people you love most To help you decide, weve unpacked what both of these vacation experiences entail in this post. Hopefully, once youre done reading, youll be more than ready to make a decision on where and when to go!"
            : value === 4
            ? "I am sitting on my balcony. It is spring and there is a little bit of heat in the sun. The balcony looks out over a road. The road is usually busy… an endless stream of trucks and cars but right now there is no traffic. Everyone is self-isolating. The machine has stopped. It feels…"
            : "4"}
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
