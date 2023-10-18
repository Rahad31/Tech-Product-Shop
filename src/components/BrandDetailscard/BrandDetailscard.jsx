import React from "react";

const BrandDetailscard = ({ brands }) => {
  const { _id, image, name, brand, type, price, description, rating } = brands;
  return (
    <div>
      <div className="flex justify-center items-center   bg-slate-200 rounded-md ">
        <div className="h-auto w-[239px] rounded-md flex flex-col gap-2 border-2 border-black">
          <img
            src={image}
            className="h-[300px] rounded-t-md p-2 bg-white"
          ></img>
          <h3 className="text-center text-[#120f0a] text-2xl font-semibold">
            {name}
          </h3>
          <h3 className="text-center text-[#120f0a] text-2xl font-semibold">
            {brand}
          </h3>
          <h3 className="text-center text-[#120f0a] text-2xl font-semibold">
            {type}
          </h3>
          <h3 className="text-center text-[#120f0a] text-2xl font-semibold">
            {price}
          </h3>
          <h3 className="text-center text-[#120f0a] text-2xl font-semibold">
            Rating: {rating}
          </h3>{" "}
          <h3 className="text-center text-[#120f0a] text-2xl font-semibold">
            {description}
          </h3>
          <button className="btn btn-error m-4">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BrandDetailscard;
