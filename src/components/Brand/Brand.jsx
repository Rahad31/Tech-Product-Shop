import React from "react";
import Brandcard from "../Brandcard/Brandcard";
import { useEffect, useState } from "react";
const Brand = () => {
  const [brand, setbrand] = useState([]);
  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => setbrand(data));
  }, []);
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
            {brand.map((brand) => (
              <Brandcard key={brand.id} brand={brand}></Brandcard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
