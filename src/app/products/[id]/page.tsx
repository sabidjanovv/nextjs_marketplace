import React from "react";
import { IProduct } from "../../../types";

interface DetailProps {
  params: {
    id: string;
  };
}

const Detail = async ({ params }: DetailProps) => {
  const { id } = params;

  // Fetch the product data
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store", // Ensures the fetch is not cached during ISR
  });
  if (!res.ok) {
    return (
      <div className="container mx-auto py-8 px-4 lg:px-16">
        <h1 className="text-2xl text-red-500">
          Failed to fetch product with ID: {id}
        </h1>
      </div>
    );
  }
  const product: IProduct = await res.json();

  return (
    <div className="container mx-auto py-8 px-4 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-center w-full h-96 object-cover rounded-lg shadow-md">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-auto h-[100%] rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} - ${index + 1}`}
                className="w-full h-36 object-cover border border-slate-300 rounded-md cursor-pointer hover:opacity-80 hover:border-blue-500 transition-opacity"
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
          <p className="text-lg text-gray-600">{product.description}</p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold text-green-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 line-through">
              $
              {(product.price / (1 - product.discountPercentage / 100)).toFixed(
                2
              )}
            </span>
            <span className="text-sm text-red-500">
              -{product.discountPercentage}%
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-yellow-500">
              {Array.from({ length: Math.round(product.rating) }).map(
                (_, i) => (
                  <span key={i}>&#9733;</span>
                )
              )}
            </span>
            <span className="text-gray-500">({product.rating.toFixed(1)})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
