import React from "react";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src="/logo_tulisan.png" alt="" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-10 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#project" className="hover:text-white">
              Project
            </a>
            <a href="#testi" className="hover:text-white">
              Testimonial
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4 max-w-80">
            Subscribe to our newsletter to get the latest news and promotions.
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="bg-red-500 text-white px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-gray-400 mt-10 mb-5">
          © 2021 All Rights Reserved. Designed by{" "}
          <a href="#" className="text-red-500" target="_blank" rel="noreferrer">
            Digital Meta Generasi
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
