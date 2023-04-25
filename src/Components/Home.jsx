import React, { useEffect } from "react";
import Movies from "./Movies";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=c6bbc48f64fcbd5ae7e37c1ff4570e37"
      )
      .then((res) => {
        console.log(res.data.results);
        setResults(res.data.results);
      });
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="home_mainDiv">
        <Carousel
          responsive={responsive}
          showDots={false}
          autoPlaySpeed={2000}
          autoPlay={true}
          swipeable={true}
          infinite={true}
        >
          {results.map((item) => {
            return (
              <Link className="Container" to={`/MovieDetail/${item.id}`}>
                <div className="HomeFlexDiv">
                  <div className="cardHomeSide">
                    <div>
                      <h3>{item.title}</h3>
                      <h4>Movie Rating : {item.vote_average.toFixed(1)}</h4>
                      <h5>{`${item.overview.slice(0,130)}....`}</h5>
                    </div>
                  </div>

                  <div className="cardHome">
                    <img
                      src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                      alt="item"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
        ;
      </div>
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
        }
      />
    </>
  );
};

export default Home;
