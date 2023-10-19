import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const products = useLoaderData();
  const { _id } = useParams();
  console.log(_id);

  const productdetail = products.find((product) => product._id == _id);
  console.log(productdetail);
  return (
    <div>
      <div className="flex  flex-col justify-center items-center   rounded-md ">
        <div className="h-auto w-auto rounded-md flex flex-col gap-2  border-black  bg-slate-200">
          <img
            src={productdetail.image}
            className="h-[500px] w-[400px] m-2 rounded-md p-2 bg-white"
          ></img>
          <div className="flex flex-col gap-2 ">
            <h3 className="text-center pt-2 text-[#120f0a] text-xl font-semibold">
              {productdetail.name}
            </h3>
            <h3 className="text-center  text-[#120f0a] text font-semibold">
              Price: ${productdetail.price}
            </h3>
            <h3 className="text-center text-[#120f0a] text font-semibold">
              Brand: {productdetail.brand}
            </h3>
            <h3 className="text-center text-[#120f0a]  font-semibold">
              Type: {productdetail.type}
            </h3>
            <h3 className="text-center text-[#120f0a] text-normal font-semibold">
              Rating: {productdetail.rating}
            </h3>
            <h3 className="text-center text-[#120f0a] text-normal font-semibold">
              {productdetail.description}
            </h3>{" "}
            <button className="btn btn-error mx-4 mb-4">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
