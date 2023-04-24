import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect,useState } from 'react';
import axios from 'axios';
import './Movies.css'
import { Link } from 'react-router-dom';

const Movies = ({heading ,Url}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrending();
    return () => {};
  }, []);
  const getTrending = async () => {
    let res = await axios.get(Url);
    let results = res.data.results;
    console.log(results);
    setData(results);
  };
  

  const responsive = { 
    superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }

};
  return (
    
    <div className='mainDiv'>
      <h2 className='heading'>{heading}</h2>
      <Carousel 
      responsive={responsive}
      showDots={false}
      autoPlaySpeed={2000}
      autoPlay={true}
      swipeable={true}
      infinite={true}
      draggable={true}
      // transitionDuration={500}
      >

    {
     data.map((item) => {
          return (
           <Link className="cardLink" to={`/MovieDetail/${item.id}`}> 
           <div className='card' >
              <img 
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} 
                alt="item"
              />
            </div>
            </Link>
          );
        })
    }

  
     </Carousel>;
    
    </div>
  )
}

export default Movies
