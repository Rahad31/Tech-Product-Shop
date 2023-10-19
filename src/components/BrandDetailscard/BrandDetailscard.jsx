import React from "react";

const BrandDetailscard = ({ brands }) => {
  const { _id, image, name, brand, type, price, description, rating } = brands;
  return (
    <div>
      <div className="flex justify-center items-center   rounded-md ">
        <div className="h-[300px] w-[420px] rounded-md flex flex-row gap-2 border-2 border-black  bg-slate-200">
          <img
            src={image}
            className="h-[280px] w-[180px] m-2 rounded-md p-2 bg-white"
          ></img>
          <div className="flex flex-col gap-2 ">
            <h3 className="text-center pt-2 text-[#120f0a] text-xl font-semibold">
              {name}
            </h3>
            <h3 className="text-center  text-[#120f0a] text font-semibold">
              Price: ${price}
            </h3>
            <h3 className="text-center text-[#120f0a] text font-semibold">
              Brand: {brand}
            </h3>
            <h3 className="text-center text-[#120f0a]  font-semibold">
              Type: {type}
            </h3>
            <h3 className="text-center text-[#120f0a] text-normal font-semibold">
              Rating: {rating}
            </h3>{" "}
            <button className="btn btn-error mx-4">Details</button>
            <button className="btn btn-error mx-4">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetailscard;
