// components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex bg-opacity-60  items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/hero-section-bg.svg')", // Path to your image in the public folder
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">SUPERVISION</h1>
        <h2 className="text-3xl font-bold mb-4 text-white">
          PREPARATION <span className="text-primary">•</span> FORMULATION
        </h2>
        <div className="w-full border-b-2 border-green-500 mb-4"></div>
        <p className="text-xl text-primary">of Provincial Finance and Budget</p>
      </div>
    </section>
  );
};

export default Hero;
