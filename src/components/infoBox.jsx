import React from "react";

const InfoBox = (data) => {
    data = JSON.stringify(data);
    data = JSON.parse(data)
    data = data.prop
    // console.log(data.prop.name)
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
        </div>
      </div>
    </>
  );
};

export default InfoBox;