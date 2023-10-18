import React from 'react';

const Topsellcart = ({brand}) => {
     const { id, pro_name, pro_image, pro_des, brands } = brand;
     return (
       <div className="flex justify-center items-center   bg-slate-200 rounded-md ">
         <div className="h-[450px] w-[290px] rounded-md flex flex-col gap-2 border-2 border-black">
           <img
             src={pro_image}
             className="h-[300px] rounded-t-md p-2 bg-white"
           ></img>
           <h3 className="text-center text-[#120f0a] text-2xl font-semibold">
             {pro_name}
           </h3>
           <h3 className="text-center text-[#120f0a] text-xl font-semibold">
             {brands}
           </h3>
           <h3 className="text-center text-[#120f0a] text-xl font-semibold">
             {pro_des}
           </h3>
         </div>
       </div>
     );
};

export default Topsellcart;