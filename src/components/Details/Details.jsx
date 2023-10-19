import React from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { saveproduct } from "../Storage/Storage";
import { AuthContext } from "../Provider/Provider";
import { useContext } from "react";

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
          toast("Sucessfully Added to Cart");
        }
      });
  };
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
            <Link to="/mycart">
              <button onClick={handleCart} className="btn btn-error mx-4 mb-4">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
