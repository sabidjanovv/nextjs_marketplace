import React from "react";
import { IProduct } from "../../../types";
import logo from "@/app/images/logo1-removebg-preview.png";
const Detail = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  // Fetch the product data
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch product with id: ${id}`);
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
              className="w-auto h-[100%]"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <img
                // onClick={}
                key={index}
                src={image}
                alt={`${product.title} - ${index + 1}`}
                className="w-full h-36 object-cover  border border-slate-300 rounded-md cursor-pointer hover:opacity-80 hover:border-blue-500 transition-opacity"
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

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Brand: {product.brand}</li>
              <li>Stock: {product.stock}</li>
              <li>Weight: {product.weight} kg</li>
              <li>
                Dimensions: {product.dimensions.width}x
                {product.dimensions.height}x{product.dimensions.depth} cm
              </li>
            </ul>
          </div>

          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Reviews</h2>
        <div className="mt-4 space-y-4">
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-800">
                    {review.reviewerName}
                  </h3>
                  <span className="text-yellow-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </span>
                </div>
                <p className="text-gray-500 mt-2">{review.comment}</p>
                <p className="text-sm text-gray-400 mt-1">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
