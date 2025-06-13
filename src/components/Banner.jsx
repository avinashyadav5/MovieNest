import React from 'react';

function Banner() {
  return (
    <div
      className="mt-17 h-[75vh] bg-cover bg-center flex items-end justify-center"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/9xfDWXAUbFXQK585JvByT5pEAhe.jpg')`,
      }}
    >
      <div className="w-full bg-black/60 text-white text-4xl md:text-5xl font-bold p-6 text-center">
        WELCOME TO FILMY WORLD
      </div>
    </div>
  );
}

export default Banner;
