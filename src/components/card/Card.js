import React, { Fragment } from "react";

const ProductCard = ({ data }) => {
  return (
    <Fragment>
      {data.map((product) => (
        <div
          className="text-gray w-100 shadow-white shadow-lg rounded-md overflow-hidden mt-10"
          key={product.id}
        >
          <img
            className="w-full h-full object-cover"
            src={product.imagen}
            alt={product.name}
          />
          <div className="bg-white p-5 flex flex-col gap-2 ">
            <div className="flex items-center justify-between gap-2 ">
              <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
                {product.name}
              </h2>
              <div>
                <span className="px-3 mr-4  py-1 rounded-full text-xs text-white bg-[#3C3D50]">
                  Stock
                </span>
                <span className="px-3  py-1 rounded-full text-xs text-white bg-[#3C3D50]">
                  {product.stock}
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="text-xl font-bold"> ${product.precio}</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm line-through opacity-50">
                  $65.0000
                </span>
                <span className="bg-[#3C3D50] px-1.5 py-0.5 rounded-md text-xs text-white">
                  Save 20%
                </span>
              </div>
            </div>

            <div className="mt-5 flex justify-between ">
              <button className="bg-[#B5E6DB]  text-black font-medium tracking-wider transition px-6 py-2 rounded-md">
                Agregar
              </button>

              <button className="bg-[#B5E6DB]    text-black font-medium tracking-wider transition px-6 py-2 rounded-md">
                Leer más
              </button>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ProductCard;
