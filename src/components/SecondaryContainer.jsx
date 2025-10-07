import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowplayingmovies && (
    <div>
      <div className="-mt-52 pl-12 relative z-20 bg-black"> 
      <MovieList title={"Now Playing"} movies={ movies.nowplayingmovies } />
      <MovieList title={"Trending"} movies={ movies.nowplayingmovies } />
      <MovieList title={"Popular"} movies={ movies.popularmovies } />
      <MovieList title={"Upcoming Movies"} movies={ movies.nowplayingmovies } />
      </div>
    </div>
  )
)
}

export default SecondaryContainer