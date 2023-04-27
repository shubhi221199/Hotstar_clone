import React from 'react'
import './SearchInp.css'
const SearchInp = ({movies}) => {
  return (
    <div>
       <div className='movDiv'> 
            {
              movies.map((elm)=>{
                return (
                  <div className='movCard'>
                    <img width={"100%"}
                       src={`https://image.tmdb.org/t/p/original${elm.backdrop_path}`}  
                    alt="elm" />
                    {/* <h2 style={{color:"red", marginTop:"100px"}}>{elm.title}</h2> */}
                  </div>
                )
              })
            }
            </div>
    </div>
  )
}

export default SearchInp
