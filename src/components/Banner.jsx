import React from 'react';
import banner from '../assets/banner.webp'; // Ensure this is a compressed WebP image

function Banner() {
  return (
    <div className="relative mt-17 h-[75vh] w-full overflow-hidden">
      <img
        src={banner}
        alt="Filmy World Banner"
        width="1280"
        height="720"
        fetchpriority="high"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 w-full text-white text-4xl md:text-5xl font-bold p-6 text-center">
        WELCOME TO FILMY WORLD
      </div>
    </div>
  );
}

export default Banner;
