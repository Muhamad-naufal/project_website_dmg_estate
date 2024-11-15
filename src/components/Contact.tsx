import React from "react";

const Contact = () => {
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Hubungi{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Kami
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Hubungi kami untuk informasi lebih lanjut
      </p>

      <form className="max-w-2xl mx-auto text-gray-700 pt-8 space-y-6">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 text-left">
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="nama"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          <div className="w-full md:w-1/2 px-2 text-left">
            <label className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-lg py-3 px-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Pesan
          <textarea
            name="message"
            id=""
            placeholder="pesanmu"
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
