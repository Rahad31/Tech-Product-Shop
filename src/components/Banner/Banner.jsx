import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto mb-6 p-2">
      <div className="relative">
        <img
          className="h-[500px]"
          src="https://i.ibb.co/wRT5hXN/563728d129663-thumb900.jpg"
        ></img>
      </div>
      <div className=" italic absolute top-[400px] right-[50px] md:top-[320px] md:right-[230px] lg:top-[300px] lg:right-[820px]">
        <div className="text-6xl font-bold">
          <span className="text-[#EAA334]  ">TECH</span> BD
        </div>
        <h1 className="text-2xl text-">A complete electronics store</h1>
      </div>
    </div>
  );
};

export default Banner;
