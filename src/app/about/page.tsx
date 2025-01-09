import { Metadata } from "next";
import React from "react";
import logo from "@/app/images/market.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Next App",
  description: "Learn more about the Next.js app and its mission.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center px-6 py-10">
      <div className="text-center">
        <Image
          alt="Next App Logo"
          src={logo}
          width={300}
          height={300}
          className="w-[200px] sm:w-[300px] mx-auto mb-6 animate-bounce rounded-xl"
          priority={true}
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
          Welcome to Next App
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          At <span className="font-bold text-blue-500">Next App</span>, we are
          dedicated to delivering innovative solutions that empower developers
          to create fast, scalable, and user-friendly web applications. Our
          mission is to make the web a better place, one app at a time.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Our Vision</h3>
          <p className="text-gray-600 text-center">
            To revolutionize the way people build and interact with web
            applications by offering tools that prioritize performance,
            scalability, and usability.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Our Mission</h3>
          <p className="text-gray-600 text-center">
            Empower developers worldwide with the best frameworks and libraries
            to achieve their web development goals seamlessly.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
}
