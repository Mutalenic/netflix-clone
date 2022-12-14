import axios from 'axios';
import React, { useEffect, useState } from 'react';
import movieRequests from '../Requests';

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(movieRequests.requestNowPlaying).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return `${str.slice(0, num)}...`;
    }
    return str;
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl ">{movie?.title}</h1>
          <div>
            <button
              className="border bg-gray-300 text-black border-gray-300 py-2 px-5"
              type="button"
            >
              PLay
            </button>
            <button
              className="border text-white border-gray-300 py-2 px-5 ml-4"
              type="button"
            >
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm py-4">{movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 100)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
