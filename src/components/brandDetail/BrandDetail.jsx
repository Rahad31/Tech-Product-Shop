import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailscard from "../BrandDetailscard/BrandDetailscard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const BrandDetail = () => {
  const products = useLoaderData();
  const { brand_name } = useParams();
  console.log(brand_name);

  const productdetail = products.filter(
    (product) => product.brand == brand_name
  );
  console.log(productdetail);
  if (productdetail.length < 1) {
    Swal.fire({
      position: "center",
      icon: "info",
      title: "No Product Found",
      showConfirmButton: false,
      timer: 2000,
    });
  }
  return (
    <div>
      <div>
        <div className="container mx-auto p-2 ">
          <div className="  carousel w-full my-10  h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/wSQybrV/christmas-smart-watch-sale-social-media-facebook-cover-web-banne-template-356617-431.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/CbhqytC/7995902.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/HH9nJvt/new-arrival-social-media-post-banner-template-544391-89.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/9Nv2rLN/5495118.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center flex flex-col justify-center items-center gap-4 mb-20">
          <h1 className="text-4xl font-bold text-[#EAA334]">PRODUCTS</h1>
          <h1 className="text-xl">A Complete Electronics Store</h1>
          <div
            className="w-1/12
       -bold"
          >
            <hr></hr>
          </div>
          {productdetail.length ? (
            <div className=" container mx-auto flex flex-row flex-wrap gap-5 justify-center ">
              {productdetail.map((brands) => (
                <BrandDetailscard
                  key={brands.name}
                  brands={brands}
                ></BrandDetailscard>
              ))}
            </div>
          ) : (
            <img
              className="flex justify-center items-center"
              src="https://i.ibb.co/6gvt7Nr/no-products.jpg"
            ></img>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BrandDetail;
