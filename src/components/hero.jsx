import React from "react";
import { useState, useEffect } from "react";
import InfoBox from "./infoBox";

const Hero = (socket) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleFoodInfo = (newData) => {
      newData = {...newData,s:socket}
      setData((prevData) => [...prevData, newData]);
    };

    socket.socket.on("foodInfo", handleFoodInfo);

    // Clean up the event listener when the component is unmounted
    return () => {
      socket.socket.off("foodInfo", handleFoodInfo);
    };
  }, [socket.socket]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <>
      {data.map((d, index) => (
        <InfoBox 
          key={index} 
          prop={d} 
        />
      ))}
    </>
  );
};

export default Hero;
