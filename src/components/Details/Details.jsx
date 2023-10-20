import React from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { saveproduct } from "../Storage/Storage";
import { AuthContext } from "../Provider/Provider";
import { useContext } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Details = () => {
  const products = useLoaderData();
  // const { image, name, brand, type, price, description, rating } = products;

  const { _id } = useParams();
  console.log(name);
  const idInt = _id;
  const { user } = useContext(AuthContext);
  let User = user.uid;
  const productdetail = products.find((product) => product._id == _id);
  // console.log(productdetail);
  const handleCart = () => {
    // saveproduct(idInt, User);
    // // toast("Successfully Added to Cart");

    const image = productdetail.image;
    const name = productdetail.name;
    const brand = productdetail.brand;
    const type = productdetail.type;
    const price = productdetail.price;
    const description = productdetail.description;
    const rating = productdetail.rating;
    const cart = { image, name, brand, type, price, description, rating };
    console.log(cart);
    fetch(`http://localhost:5000/mycarts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added To Cart",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  return (
    <div>
      <div className="flex  flex-col gap-1 justify-center items-center   rounded-md ">
        <h1 className="text-4xl font-bold text-[#EAA334]">Details</h1>
        <h1 className="text-xl">A Complete Electronics Store</h1>
        <div
          className="w-1/12
       -bold mb-4"
        >
          <hr></hr>
        </div>
        <div className="h-auto w-auto  rounded-md flex flex-col md:flex-row gap-2  border-black  bg-slate-200">
          <img
            src={productdetail.image}
            className="h-auto w-[400px] m-2 rounded-md p-2 bg-white"
          ></img>
          <div className="flex flex-col gap-2 p-2">
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
              Rating: {productdetail.rating}/5
            </h3>
            <h3 className="text-center w-[200px] text-[#120f0a] text-normal font-semibold p-2">
              Details:<br></br>
              {productdetail.description}
            </h3>
            <div className="flex justify-center items-center md:flex-grow md:mt-48">
              {" "}
              <Link to="/">
                <button
                  onClick={handleCart}
                  className="btn btn-error mx-4 mb-4"
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
