import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import { getStoredproduct } from "../Storage/Storage";
const Mycart = () => {
  const [product, setproduct] = useState([]);
  const productcard = useLoaderData();
  const { _id } = productcard;
  const [displayproduct, setDisplayproduct] = useState([]);

  useEffect(() => {
    const storedproduct = getStoredproduct();

    const Products = [];

    for (const _id of storedproduct) {
      const products = productcard.find(
        (productcard) => productcard._id === _id
      );

      if (products) {
        Products.push(products);
      }

      setproduct(Products);
      setDisplayproduct(Products);
    }
  }, [productcard]);
  return (
    <div>
      <div className="container mx-auto flex flex-row flex-wrap gap-5 justify-center items-center my-10">
        {displayproduct.map((product) => (
          <Cart key={_id} product={product}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Mycart;
