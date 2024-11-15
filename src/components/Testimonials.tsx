import React from "react";
import { testimonialsData } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="testi"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Pelanggan{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Berbicara
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Apa kata pelanggan kami tentang DMG Estate
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Testimonial Card */}
        {testimonialsData.map((testimonial, index) => (
          <div className="">
            <div className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl text-gray-700 font-medium">
                {testimonial.name}
              </h2>
              <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
              <div className="flex justify-center gap-1 text-red-500 mb-4">
                {Array.from({ length: testimonial.rating }, (item, index) => (
                  <img src="/star_icon.svg" alt="star" key={index} />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
