import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-center mb-8">
          We’d love to hear from you! Fill out the form below or contact us
          directly at{" "}
          <a
            href="mailto:sabidjanovv@gmail.com"
            className="text-blue-600 underline"
          >
            sabidjanovv@gmail.com
          </a>
          .
        </p>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your email address"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Or call us directly at{" "}
            <a href="tel:+998941151158" className="text-blue-600 underline">
              +998 (94) 115-11-58
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
