import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

function Movies({ handleAddToWatchList, handleRemoveFromWatchList, watchList }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${pageNo}`)
    .then((res) => {
      setMovies(res.data.results);
    });
}, [pageNo]);

return (
  <div className='p-5'>
    <div className='text-2xl m-5 font-bold text-center'>
      Trending Movies
    </div>

    <div className='flex flex-row flex-wrap justify-around'>
      {movies.map((movieObj) => {
        return (
          <MovieCard
            key={movieObj.id}
            movieObj={movieObj}
            poster_path={movieObj.poster_path}
            name={movieObj.original_title}
            handleAddToWatchList={handleAddToWatchList}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
            watchList={watchList}
            showLink={true} // ✅ triggers link feature in MovieCard
          />
        );
      })}
    </div>

    <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
  </div>
);
}

export default Movies;
