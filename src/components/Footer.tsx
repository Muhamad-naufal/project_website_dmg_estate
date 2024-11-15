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
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul>
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
              Home
            </a>
          </ul>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
