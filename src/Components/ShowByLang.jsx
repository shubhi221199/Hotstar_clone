import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Languages from './Languages'
import { Link } from 'react-router-dom'
import './ShowByLang.css'

const ShowByLang = () => {
    const [data,setData]= useState([])
var lang = localStorage.getItem("Lang")
    useEffect(()=>{
      var codeM =  localStorage.getItem("code")
      
  getdataByLang(codeM)
    },[])

const getdataByLang = (lang="en") =>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=939cb94eb1470cd3b74b2ec575a26449&with_genres=popular&with_original_language=${lang}`).then((res)=>{
        console.log(res.data.results)
        setData(res.data.results)
    })
}

  return (
    <>
  <h3 style={{color:"white", marginTop:"100px",paddingLeft:"30px"}}>{lang}</h3>
    <div className='mainD'>
        
        {/* <Languages/> */}
        {
            data.map((elm)=>{
                return (
                    <Link to ={`/MovieDetail/${elm.id}`}>
                    <div className='cardDiv'>
                        <img 
                         src={`https://image.tmdb.org/t/p/original${elm.backdrop_path}`} 
                         alt="elm" width={"400px"}/>
                    </div>
                    </Link>
                )
            })
        }
      
    </div>
    </>
  )
}

export default ShowByLang
