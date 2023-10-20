import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
const Cart = ({ product, Product, setProduct }) => {
  const { _id, image, name, brand, type, price, description, rating } = product;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("done");
        fetch(`http://localhost:5000/mycarts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = Product.filter((load) => load._id !== _id);
              setProduct(remaining);
              console.log(remaining);
              // window.location.reload();
            }
          });
      }
    });
  };

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
              Rating: {rating}/5
            </h3>{" "}
            <div className="flex justify-center items-center flex-grow"><button
              onClick={() => handleDelete(_id)}
              className=" btn btn-error w-[100px]"
            >
              Delete
            </button></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
