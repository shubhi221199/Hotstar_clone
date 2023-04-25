import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const PlayMovie = () => {
    const[viddata,setViddata]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        getdata()
    },[])

    const getdata =()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c6bbc48f64fcbd5ae7e37c1ff4570e37&language=en-US`).then((res)=>{
            
         
            setViddata(res.data.results[res.data.results.length-1])
        })
    }
    // let res = viddata[viddata.length-1];
console.log(viddata.key)
  return (
    <div>
        {/* <h2 style={{color:"teal"}}>Play: {id}</h2> */}

        {/* <h1 style={{color:"teal"}}>{viddata.key}</h1> */}

        <div>
        <iframe style={{marginTop:"90px",}}
    id="iframe"
      width="100%"
      height="550px"
      src={`https://www.youtube.com/embed/${viddata.key}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
        </div>
  <div>
  <h2>{viddata.title
}</h2>
  </div>

        
    </div>
  )
}

export default PlayMovie
