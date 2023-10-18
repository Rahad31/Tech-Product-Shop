import React from "react";
import { useState, useEffect } from "react";
import Topsellcart from "../Topsellcart/Topsellcart";
const Topsell = () => {
  const [brand, setbrand] = useState([]);
  useEffect(() => {
    fetch("/top.json")
      .then((res) => res.json())
      .then((data) => setbrand(data));
  }, []);
  return (
    <div>
      <div>
        <div className="text-center flex flex-col justify-center items-center gap-4 mb-20">
          <h1 className="text-4xl font-bold text-[#EAA334]">TOP SELLING</h1>
          <h1 className="text-xl">A complete electronics store</h1>
          <div
            className="w-1/12
       -bold"
          >
            <hr></hr>
          </div>

          <div className=" container mx-auto flex flex-row flex-wrap gap-5 justify-center ">
            {brand.map((brand) => (
              <Topsellcart key={brand.id} brand={brand}></Topsellcart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topsell;
