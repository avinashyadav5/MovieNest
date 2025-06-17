import React, { useEffect, useState } from 'react';
import genreids from '../utility/genre';

function Watchlist({ watchList, handleRemoveFromWatchList, setWatchList }) {
  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState(['All Genres']);
  const [currGenre, setCurrGenre] = useState('All Genres');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const sortIncreasing = () => {
    const sortedIncreasing = [...watchList].sort((a, b) => a.vote_average - b.vote_average);
    setWatchList(sortedIncreasing);
  };

  const sortDecreasing = () => {
    const sortedDecreasing = [...watchList].sort((a, b) => b.vote_average - a.vote_average);
    setWatchList(sortedDecreasing);
  };

  useEffect(() => {
    const temp = watchList
      .map((movieObj) => genreids[movieObj.genre_ids?.[0]])
      .filter((g) => g !== undefined);
    const uniqueGenres = ['All Genres', ...new Set(temp)];
    setGenreList(uniqueGenres);
  }, [watchList]);

  return (
    <>
      <div className='flex justify-center flex-wrap m-4 mt-18'>
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => setCurrGenre(genre)}
            className={`flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white text-xl mx-4 cursor-pointer transition-all duration-300 ${
              currGenre === genre ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          >
            {genre}
          </div>
        ))}
      </div>

      <div className='flex justify-center my-6'>
        <input
          onChange={handleSearch}
          value={search}
          type='text'
          placeholder='Search your watchlist...'
          className='h-12 w-72 px-4 rounded-lg shadow-md border focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300'
        />
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-400 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th className='flex justify-center'>
                <div onClick={sortIncreasing} className='p-1.5'><i className="fa-solid fa-arrow-up"></i></div>
                <div className='p-1.5'>Rating</div>
                <div onClick={sortDecreasing} className='p-1.5'><i className="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movieObj) => {
                const titleMatch = movieObj.title.toLowerCase().includes(search.toLowerCase());
                const genreMatch = currGenre === 'All Genres' || genreids[movieObj.genre_ids?.[0]] === currGenre;
                return titleMatch && genreMatch;
              })
              .map((movieObj) => (
                <tr className='border-b-2' key={movieObj.id}>
                  <td className='flex items-center px-6 py-2.5'>
                    <img
                      className='h-[6rem] w-[10rem]'
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt=''
                    />
                    <div className='m-10'>{movieObj.title}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreids[movieObj.genre_ids?.[0]] || 'Unknown'}</td>
                  <td
                    className='text-red-700 hover:cursor-pointer'
                    onClick={() => handleRemoveFromWatchList(movieObj)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
