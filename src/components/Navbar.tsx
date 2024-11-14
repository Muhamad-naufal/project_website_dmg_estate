import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src="/logo_tulisan.png" className="w-36" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#home" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#project" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#testi" className="cursor-pointer hover:text-gray-400">
            Testimonial
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          <a href="#contact">Contact Us</a>
        </button>
        <img
          onClick={() => setShowMenu(true)}
          src="/menu_icon.svg"
          alt="menu"
          className="md:hidden w-7 cursor-pointer"
        />
      </div>
      <div
        className={`md:hidden ${
          showMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMenu(false)}
            src="/cross_icon.svg"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMenu(false)}
            href="#home"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#about"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#project"
            className="px-4 py-2 rounded-full inline-block"
          >
            Project
          </a>
          <a
            onClick={() => setShowMenu(false)}
            href="#testi"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonial
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
