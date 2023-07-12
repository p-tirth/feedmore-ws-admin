import React from "react";
import { useState } from "react";
import InfoBox from "./infoBox";


const Hero = (socket) => {

    const [data,setData] = useState([])
    socket.socket.on("foodInfo",(newData) => {
        // console.log(newData)
        // newData = JSON.stringify(newData);
        setData(data=>[...data,newData]);
      })
  return (
    <>
    {
        data.map((d)=>(<InfoBox prop={d} />))
    }
    </>
  );
};

export default Hero;