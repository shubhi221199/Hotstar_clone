import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './ShowByGen.css'

const ShowByGenre = () => {
  const [data,setData]=useState([])
  const {id} = useParams()
   let gen = localStorage.getItem("Genre")
    useEffect(()=>{
    
        getdata()
    },[])

    
    const getdata = ()=>{
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=939cb94eb1470cd3b74b2ec575a26449&with_genres=${id}&with_original_language=te`).then((res)=>{
console.log(res.data.results)
setData(res.data.results)
        })
    }
console.log(gen)
  return (
    <>
    <h3 style={{color:"white", paddingLeft:"30px",marginTop:"100px"}}>{gen}</h3>
    <div className='mainD'>

        {
            data.map((item)=>{
                return(
                  <Link to={`/MovieDetail/${item.id}`}>  <div className='cardDiv'>
                        <img 
                         src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} 
                        alt=""
                        width={"300px"} />
                    </div>
                    </Link>
                )
            })
        }
      
    </div></>
  )
}

export default ShowByGenre

