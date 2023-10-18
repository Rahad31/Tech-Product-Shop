import React from "react";

const Addpro = () => {
  return (
    <div className="container mx-auto flex justify-center items-center p-2">
      <form className="flex flex-col  justify-center items-center bg-slate-200  border-2 border-black w-fit rounded-md lg:w-[800px]">
        <div className="flex flex-row flex-wrap justify-center items-center p-10 gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  font-semibold">
                Product Image URL
              </span>
            </label>
            <input
              type="text"
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
              placeholder="Rating Out Of 5"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div>
          <button className="btn btn-error my-4">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default Addpro;
