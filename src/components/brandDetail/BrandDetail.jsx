import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailscard from "../BrandDetailscard/BrandDetailscard";
const BrandDetail = () => {
  const products = useLoaderData();
  const { brand_name } = useParams();
  console.log(brand_name);

  const productdetail = products.filter(
    (product) => product.brand == brand_name
  );
  console.log(productdetail);
  //   const { _id } = useParams();
  return (
    <div>
      <div>
        <div className="text-center flex flex-col justify-center items-center gap-4 mb-20">
          <h1 className="text-4xl font-bold text-[#EAA334]">BRANDS</h1>
          <h1 className="text-xl">A complete electronics store</h1>
          <div
            className="w-1/12
       -bold"
          >
            <hr></hr>
          </div>

          <div className=" container mx-auto flex flex-row flex-wrap gap-5 justify-center ">
            {productdetail.map((brands) => (
              <BrandDetailscard
                key={brands.name}
                brands={brands}
              ></BrandDetailscard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetail;
