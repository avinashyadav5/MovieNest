import React from 'react';

function MovieCard({ movieObj, poster_path, name, handleAddToWatchList, handleRemoveFromWatchList, watchList, showLink }) {
  const isInWatchList = watchList.some((m) => m.id === movieObj.id);

  return (
    <div
      className='relative h-[45vh] w-[180px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer mb-5'
    >
      {/* ⭐ or ❌ */}
      {isInWatchList ? (
        <div onClick={() => handleRemoveFromWatchList(movieObj)} className='absolute top-2 left-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60 text-white z-10'>
          ❌
        </div>
      ) : (
        <div onClick={() => handleAddToWatchList(movieObj)} className='absolute top-2 left-2 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60 text-white z-10'>
          ⭐
        </div>
      )}

      {/* Poster wrapped in link */}
      {showLink ? (
        <a
          href={`https://www.themoviedb.org/movie/${movieObj.id}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div
            className='h-full w-full bg-center bg-cover rounded-xl'
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}
          ></div>
        </a>
      ) : (
        <div
          className='h-full w-full bg-center bg-cover rounded-xl'
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}
        ></div>
      )}

      {/* Movie Name */}
      <div className='absolute bottom-0 w-full bg-gray-900/60 text-white text-sm p-2 text-center font-semibold'>
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
