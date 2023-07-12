import React from "react";
import { Socket } from "socket.io-client";

const InfoBox = (data) => {
  data=data.prop
  console.log(data)
    const onVerify = () =>{
      const socket = data.s
      console.log(socket)
      data.s = "done"
      console.log(data)
      socket.socket.emit("verified",(data));
      console.log("verified sent")
      
    }
  return (
    <>
      <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 m-5">
        <h5 className="mb-2 text-2xl text-[#EDF5E1] font-semibold leading-tight dark:text-neutral-50 underline">
          {`Donator info`}
        </h5>
        <div className="bg-gray-900 text-[#EDF5E1] shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium">Name</h3>
              <p>{data.name}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Phone Number</h3>
              <p>{data.phone}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Address</h3>
              <p>{data.address}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Veg Food</h3>
              <p>{data.veg}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Non-Veg Food</h3>
              <p>{data.nonVeg}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Rice</h3>
              <p>{data.rice}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Chapati</h3>
              <p>{data.chappati}</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={onVerify} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoBox;
