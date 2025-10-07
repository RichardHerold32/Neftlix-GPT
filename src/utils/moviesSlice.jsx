import { createSlice } from '@reduxjs/toolkit';
const moviesSlice = createSlice({
    name:'movies',
    initialState: {
        nowplayingmovies: null,
        trailervideo: null,
        popularmovies:null
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowplayingmovies = action.payload;
        },
         addPopularMovies:(state, action) => {
            state.popularmovies = action.payload;
        },
        addTrailerVideo:(state, action) => {
            state.trailervideo = action.payload;
        }
    }
})

export const{addNowPlayingMovies, addTrailerVideo, addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;