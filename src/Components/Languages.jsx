import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Languages.css'

const Languages = () => {
const navigate = useNavigate()

    const imgVar = "https://hotstar-tawny.vercel.app/LanguageImg";
    const LangArr = [
      {
        img: imgVar + "/Hindi.jpg",
        name: "Hindi",
        code: "hi",
      },
      {
        img: imgVar + "/English.jpg",
        name: "English",
        code: "en",
      },
      {
        img: imgVar + "/Telugu.jpg",
        name: "Telugu",
        code: "te",
      },
      {
        img: imgVar + "/Tamil.jpg",
        name: "Tamil",
        code: "ta",
      },
      {
        img: imgVar + "/Bengali.jpg",
        name: "Bengali",
        code: "ba",
      },
      {
        img: imgVar + "/Malyalam.jpg",
        name: "Malayalam",
        code: "ml",
      },
      {
        img: imgVar + "/Marathi.jpg",
        name: "Marathi",
        code: "mr",
      },
      {
        img: imgVar + "/Kannada.jpg",
        name: "Kannada",
        code: "kn",
      },
      {
        img: imgVar + "/Korean.jpg",
        name: "Korean",
        code: "ko",
      },
      {
        img: imgVar + "/Japanese.jpg",
        name: "Japanese",
        code: "ja",
      },
      {
        img: imgVar + "/Odia.jpg",
        name: "Odia",
        code: "or",
      },
    ];
  
const handleCode = (codem,lang) =>{
  localStorage.setItem("code",(codem))
  localStorage.setItem("Lang",(lang))
  navigate("/ShowByLang")
}


  return (
    <>
    <h3 className='langh3'>Languages</h3>
    <div className='MainLang'>
        {
            LangArr.map((elm)=>{
                return (
                    <div className='cardLang' onClick={()=>{handleCode(elm.code,elm.name)}}>
                      <h5 >{elm.name}</h5>
                        <img src={elm.img} alt="img" />
                    </div>
                )
            })
        }
      
    </div></>
  )
}

export default Languages
