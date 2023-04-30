import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const Tv = () => {
  const [show,setShow]=useState([])
  useEffect(()=>{
    getshows()
  },[])

  const getshows=()=>{
    axios.get("https://api.themoviedb.org/3/tv/popular?api_key=c6bbc48f64fcbd5ae7e37c1ff4570e37&language=en-US&page=1").then((res)=>{
      console.log(res.data.results)
          setShow(res.data.results)
    })
 
  }
  return (
    <div>
      

      <h3 style={{color:"white", marginTop:"100px",paddingLeft:"30px"}}></h3>

    <div className='mainD'>
        
        {/* <Languages/> */}
        {
          show.length>0?
            show.map((elm)=>{
                return (
                    
                    <div className='cardDiv'>
                        <img 
                         src={`https://image.tmdb.org/t/p/original${elm.backdrop_path}`} 
                         alt="elm" width={"400px"}/>
                    </div>
                  
                )
            }):   <Loader/>
          
        }
      
    </div>
    

    </div>
  )
}

export default Tv
