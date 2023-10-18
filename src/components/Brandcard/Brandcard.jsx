import React from "react";
import { Link } from "react-router-dom";
const Brandcard = ({ brand }) => {
  const { id, brand_name, brand_image } = brand;
  return (
    <div>
      <Link to={`/Servicecard/${id}`}>
        <div className="flex justify-center items-center   bg-slate-200 rounded-md ">
          <div className="h-[350px] w-[239px] rounded-md flex flex-col gap-2 border-2 border-black">
            <img
              src={brand_image}
              className="h-[300px] rounded-t-md p-2 bg-white"
            ></img>
            <h3 className="text-center text-[#120f0a] text-2xl font-semibold">
              {brand_name}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brandcard;
