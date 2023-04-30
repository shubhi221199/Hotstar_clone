import React from 'react'
import Movies from './Movies'

const Navmovies = () => {
  return (
    <div style={{marginTop:"90px"}}>

<Movies
        heading={"Popular Movies"}
        Url={
          "https://api.themoviedb.org/3/movie/popular?api_key=c6bbc48f64fcbd5ae7e37c1ff4570e37&language=en-US&page=1"
        }
      />
      <Movies
        heading={"Trending Movies"}
        Url={
          "https://api.themoviedb.org/3/trending/movie/week?api_key=c6bbc48f64fcbd5ae7e37c1ff4570e37"
        }
      />

      {/* <Movies heading={"Latest Movies"} Url= {"https://api.themoviedb.org/3/movie/latest?api_key=c6bbc48f64fcbd5ae7e37c1ff4570e37&language=en-US&page=1"}/> */}

      <Movies
        heading={"Top Rated"}
        Url={
          "https://api.themoviedb.org/3/movie/top_rated?api_key=c6bbc48f64fcbd5ae7e37c1ff4570e37&language=en-US&page=1"
        }
      />
      <Movies
        heading={"Upcoming Movies"}
        Url={
          "https://api.themoviedb.org/3/movie/upcoming?api_key=c6bbc48f64fcbd5ae7e37c1ff4570e37&language=en-US&page=1"
        }/>
      
    </div>
  )
}

export default Navmovies
