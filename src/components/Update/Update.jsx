import React from "react";
import { useLoaderData } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
//  Swal.fire({
//    position: "center",
//    icon: "success",
//    title: "Succeessfully Updated",
//    showConfirmButton: false,
//    timer: 2000,
//  });
const Update = () => {
  const navigate = useNavigate();
  const brands = useLoaderData();
  const { _id, image, name, brand, type, price, description, rating } = brands;
  const handleUpPro = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.pro_img.value;
    const name = form.pro_name.value;
    const brand = form.pro_brand.value;
    const type = form.pro_type.value;
    const price = form.pro_price.value;
    const description = form.pro_des.value;
    const rating = form.pro_rat.value;
    const upProduct = {
      image,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(upProduct);
    // form.reset();
    // send data
    fetch(
      `https://techbd-d3hhwjy5m-rahads-projects.vercel.app/product/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(upProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Succeessfully Updated",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="container mx-auto flex justify-center items-center p-2">
      <form
        onSubmit={handleUpPro}
        className="flex flex-col  justify-center items-center bg-slate-200  border-2 border-black w-fit rounded-md lg:w-[800px]"
      >
        <h1 className="text-2xl font-bold mt-6">Update Product</h1>
        <div className="flex flex-row flex-wrap justify-center items-center p-10 gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  font-semibold">
                Product Image URL
              </span>
            </label>
            <input
              type="text"
              name="pro_img"
              defaultValue={image}
              placeholder="URL"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Product Name</span>
            </label>
            <input
              type="text"
              name="pro_name"
              defaultValue={name}
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Brand Name</span>
            </label>
            <input
              type="text"
              name="pro_brand"
              defaultValue={brand}
              placeholder="Brand Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Product Type</span>
            </label>
            <input
              type="text"
              name="pro_type"
              defaultValue={type}
              placeholder="Product Type"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Product Price</span>
            </label>
            <input
              type="text"
              name="pro_price"
              defaultValue={price}
              placeholder="Product Price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">
                Product Short Description
              </span>
            </label>
            <input
              type="text"
              name="pro_des"
              defaultValue={description}
              placeholder="Short Description"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Product Rating</span>
            </label>
            <input
              type="text"
              name="pro_rat"
              defaultValue={rating}
              placeholder="Rating Out Of 5"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <div className="form-control w-full max-w-xs mb-6">
          <input
            type="submit"
            value="Update Product"
            className="input input-bordered btn btn-error "
          />
        </div>
        {/* <div>
          <button onClick={handleAddPro} className="btn btn-error my-4 w-full">
            Add Product
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Update;
