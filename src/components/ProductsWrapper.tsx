"use client";
import React from "react";
import { IProduct } from "../types";
import { useRouter } from "next/navigation";

const ProductsWrapper = ({ products }: { products: IProduct[] }) => {
  const router = useRouter();

  return (
    <div className="container bg-slate-200 mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Browse Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product: IProduct) => (
          <div
            key={product.id}
            onClick={() => router.push(`/products/${product.id}`)}
            className="relative flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-72 object-cover rounded-md group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="absolute top-3 right-3 bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded">
              {product.category}
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm">{product.brand}</p>

            <div className="mt-auto">
              <p className="text-green-600 font-semibold text-xl">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-500 text-sm">
                Stock:{" "}
                <span
                  className={`font-bold ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock > 0 ? product.stock : "Out of Stock"}
                </span>
              </p>
            </div>

            <button
              className="mt-3 w-full py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                alert("Added to cart!");
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsWrapper;
