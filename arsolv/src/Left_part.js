import React from 'react'
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Img1 from "./d3.jpg";

import Img2 from "./d2.jpg";
import Img3 from "./d1.jpg";


import Img4 from "./d4.jpg";

import Img5 from "./d5.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { inc_ ,dec_} from './Redux/Actions';
export default function Left_part() {
 var value= useSelector(value=>value);
 var dispatch=useDispatch();
 var arr_=[Img1,Img2,Img3,Img4,Img5];
  console.log(value);
  return (
    <div className="Left_Side">
      <div id="l_up">
        <img  src={value===0?Img1:value===1?Img2:value===2?Img3:value===3?Img4:value===4?Img5:Img5} style={{ width: "100%", height: "100%" }} />
      </div>
      <div id="l_down">
        <div id="first">
          {" "}
          <ArrowLeftIcon
            onClick={() => {
              dispatch(dec_);
            }}
            style={{ width: "100px", height: "100px" }}
          />{" "}
        </div>
        <div id="second">
          {/* <div id="one">
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
          </div> */}
          {
            arr_.map((e,i)=>{
              if(i===0)
              {
                return (
                  <div
                    name={`_${i}`}
                    className={value === 0 ? "so" : "no"}
                    key={e}
                    id="one"
                  >
                    <img src={e} style={{ width: "100%", height: "100%" }} />
                  </div>
                );
              }
              if(i===1){
                return (
                  <div
                    name={`_${i}`}
                    key={e}
                    className={value === 1 ? "so" : "no"}
                    id="one"
                  >
                    <img src={e} style={{ width: "100%", height: "100%" }} />
                  </div>
                );
              }
              if (i === 2) {
                return (
                  <div
                    name={`_${i}`}
                    key={e}
                    className={value === 2 ? "so" : "no"}
                    id="one"
                  >
                    <img src={e} style={{ width: "100%", height: "100%" }} />
                  </div>
                );
              }
              if (i === 3) {
                return (
                  <div
                    name={`_${i}`}
                    className={value === 3 ? "so" : "no"}
                    key={e}
                    id="one"
                  >
                    <img src={e} style={{ width: "100%", height: "100%" }} />
                  </div>
                );
              }
              if (i === 4) {
                return (
                  <div
                    name={`_${i}`}
                    className={value === 4 ? "so" : "no"}
                    key={e}
                    id="one"
                  >
                    <img src={e} style={{ width: "100%", height: "100%" }} />
                  </div>
                );
              }

            })
          }
        </div>
        <div id="third">
          {" "}
          <ArrowRightIcon
            onClick={() => {
              // alert("hello");
              dispatch(inc_);
            }}
            style={{ width: "100px", height: "100px" }}
          />{" "}
        </div>
      </div>
    </div>
  );
}
