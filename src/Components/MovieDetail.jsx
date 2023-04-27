import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MoviesDetail.css";
import Movies from "./Movies";
import { AuthContext } from "./Context";
import { useContext } from "react";

const MovieDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const{isLogin} =  useContext(AuthContext)

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c6bbc48f64fcbd5ae7e37c1ff4570e37&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };

  // const cons =data.overview.slice(0,150);
  // console.log(cons)
  return (
    <div>
      <h2></h2>
      {/* <h2 style={{ color: "crimson" }}>Details: {id}</h2> */}
      {
        <div className="DetailFlexdiv">
          <div className="firstDivDetail">
            <div>
              <h4>SUBSCRIBER</h4>
              <h2>{data.title}</h2>
              <h5>{data.overview}</h5>
              {/* <h5>{`${(data.overview).slice(0,150)}...`}</h5> */}

              {/* <h5>{`${data.overview.substring(0,data.overview.length/2)}....`}</h5> */}
              <Link to={`/PlayMovie/${id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-play-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
               
              </Link> Watch Trailer
              <Link to={`/PlayMovie/${id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-play-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
              
              </Link><span >  Watch Movie</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus wa"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              <span className="Tagname">
                 WATCHLIST
              </span>
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-share-fill wa"
                viewBox="0 0 16 16"
              >
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
              </svg>
                <span className="Tagname">Share</span>
              <br></br>

              {
                isLogin?    <Link to={`/PlayMovie/${id}`}><button className="langbtn">Watch now</button></Link>:
               <Link to ="/subscribe"> <button className="langbtn"> subscribe to Watch </button></Link>
              }
             
              {/* <button className="langbtn">தமிழ்</button>
              <button className="langbtn">हिन्दी</button>
              <button className="langbtn">తెలుగు</button>
              <button className="langbtn">ಕನ್ನಡ</button> */}
            </div>
          </div>

          <div className="DetailsCard">
            <img
              width={"100%"}
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt="data"
            />
          </div>
        </div>
      }





       <Movies
        heading={"More Like This"}
        Url={
          "https://api.themoviedb.org/3/movie/top_rated?api_key=c6bbc48f64fcbd5ae7e37c1ff4570e37&language=en-US&page=1"
        }/>

    </div>
  );
};

export default MovieDetail;
