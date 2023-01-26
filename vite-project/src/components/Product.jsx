import React, { useState } from "react";

const Product = () => {
  let [count, setCount] = useState(0);

  const handleAddProduct = () => {
    setCount(count + 1);
  };

  const handleDeleletProduct = () => {
    setCount(count - 1);
  };
  const Num = count <= 0 ? 1 : count + 1;

  const price = 1200;
  const totalPrice = price * Num;

  const handleBuyProduct = () => {
    alert(`Successfully Bought this Product at $${totalPrice}`);
  };

  //   console.log(setCount({ count: count + 1 }));

  return (
    <div className="containter d-flex  m-3  ala flex-column  w-50 bg-slate-600 h-45 ">
      <div className="d-flex">
        <button
          onClick={handleDeleletProduct}
          className="btn btn-success m-9  "
        >
          ➖
        </button>
        <div className="bg-yellow-200 d-flex flex-row h-10  m-2">
          <p className="m-2">product Quantity</p>
          <span className="bg-blue-600 text-2xl rounded  text-white p-1 ">
            {Num}
          </span>
        </div>
        <button onClick={handleAddProduct} className="btn btn-danger m-9">
          ➕
        </button>
      </div>

      <div className="text-white position-relative  text-3xl left-36 w-30 h-20 ">
        Price: ${price}
      </div>
      <div className="d-flex position-relative left-36">
        <button onClick={handleBuyProduct} className="btn btn-dark m-2 left-4 ">
          Buy Product
        </button>
      </div>
    </div>
  );
};

export default Product;
