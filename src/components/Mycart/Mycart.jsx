import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import { getStoredproduct } from "../Storage/Storage";
const Mycart = () => {
  const productcard = useLoaderData();
  const [Product, setProduct] = useState(productcard);
  const { _id } = productcard;
  // const [displayproduct, setDisplayproduct] = useState([]);

  // useEffect(() => {
  //   const storedproduct = getStoredproduct();

  //   const Products = [];

  //   for (const _id of storedproduct) {
  //     const products = productcard.find(
  //       (productcard) => productcard._id === _id
  //     );

  //     if (products) {
  //       Products.push(products);
  //     }

  //     setproduct(Products);
  //     setDisplayproduct(Products);
  //   }
  // }, [productcard]);
  return (
    <div>
      <div className="container mx-auto flex flex-row flex-wrap gap-5 justify-center items-center my-10">
        {Product.map((product) => (
          <Cart
            key={product._id}
            product={product}
            Product={Product}
            setProduct={setProduct}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default Mycart;
