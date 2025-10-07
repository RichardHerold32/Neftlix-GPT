import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-40 pr-4">
     <img
    className="w-full rounded-lg hover:scale-105 cursor-pointer transition-transform duration-200"
    src={IMG_CDN_URL + posterPath}
    alt="movie poster"
/>

    </div>
  )
}

export default MovieCard