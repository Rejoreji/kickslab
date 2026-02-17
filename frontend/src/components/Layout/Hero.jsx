import React from "react";
import heroImg from "../../assets/Kick2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Kicks"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-black flex items-center justify-center bg-opacity-10">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4 ">
            New Balance <br />
            990
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            {" "}
            Explore our newest collection
          </p>
          {/* <Link to="#" className="border-2 border-white text-white px-6 py-2 rounded-full text-xl transition-all duration-300 ease-in-out hover:border-black hover:bg-black">
                  Shop Now    
                </Link> */}
          <Link
            to="#"
            className="group relative inline-flex h-12 items-center overflow-hidden rounded-full border-2 border-white px-6 py-2 text-xl font-medium text-white transition-colors duration-300 hover:border-black hover:bg-black"
          >
            {/* The "Moving Box" containing both text states */}
            <div className="relative flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-8">
              {/* Default Text (Slides up and out) */}
              <span className="flex h-7 items-center justify-center transition-all duration-500 group-hover:invisible group-hover:opacity-0">
                Shop Now
              </span>

              {/* Hover Text (Slides up from bottom to middle) */}
              <span className="absolute top-8 flex h-7 w-full items-center justify-center transition-all duration-500">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
