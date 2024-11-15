import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      <h1 className="text-2xl  sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          DMG Estate
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Buat kamu yang ingin mencari rumah impian, DMG Estate adalah solusi.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src="/brand_img.png"
          alt="logo"
          className="w-full sm:w-1/2 max-wlg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 ">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">1+</p>
              <p>Pengalaman</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projek Selesai</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>juta kaki persegi terbangun</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Dalam Proses</p>
            </div>
          </div>
          <p className="my-10 max-w-lg text-justify">
            DMG Estate adalah perusahaan real estate sejak 2000. Kami telah
            menyelesaikan 12+ proyek dan tengah mengerjakan 25+ lainnya, dengan
            lebih dari 20 juta kaki persegi properti di seluruh Indonesia. Kami
            berkomitmen memberikan pelayanan terbaik dan mewujudkan rumah impian
            Anda.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
