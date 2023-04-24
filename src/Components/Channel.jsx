
import React from "react";
import './Channel.css'


function Channel() {
  const channelPath = "https://hotstar-tawny.vercel.app/ChannelImage";
  
  const cArr = [
    {
      img: channelPath + "/661121-h.jpg",
    },
    {
      img: channelPath + "/661132-h.jpg",
    },
    {
      img: channelPath + "/661133-h.jpg",
    },
    {
      img: channelPath + "/661136-h.jpg",
    },
    {
      img: channelPath + "/661100-h.jpg",
    },
    {
      img: channelPath + "/661102-h.jpg",
    },
    {
      img: channelPath + "/661103-h.jpg",
    },
    {
      img: channelPath + "/661105-h.jpg",
    },
    {
      img: channelPath + "/661112-h.jpg",
    },
    {
      img: channelPath + "/661116-h.jpg",
    },
    {
      img: channelPath + "/661117-h.jpg",
    },
    {
      img: channelPath + "/661119-h.jpg",
    },
    {
      img: channelPath + "/661137-h.jpg",
    },
    {
      img: channelPath + "/661138-h.jpg",
    },
    {
      img: channelPath + "/661167-h.jpg",
    },
    {
      img: channelPath + "/661168-h.jpg",
    },
    {
      img: channelPath + "/661170-h.jpg",
    },
    {
      img: channelPath + "/661171-h.jpg",
    },
    {
      img: channelPath + "/661172-h.jpg",
    },
    {
      img: channelPath + "/661173-h.jpg",
    },
    {
      img: channelPath + "/661174-h.jpg",
    },
    {
      img: channelPath + "/661176-h.jpg",
    },
    {
      img: channelPath + "/661177-h.jpg",
    },
    {
      img: channelPath + "/661178-h.jpg",
    },
    {
      img: channelPath + "/661180-h.jpg",
    },
    {
      img: channelPath + "/776620-h.jpg",
    },
    {
      img: channelPath + "/836373-h.jpg",
    },
    {
      img: channelPath + "/956970-h.jpg",
    },
  ];

  return (
    <>
    <h3 className="h3tag">Channels</h3>
    <div className="Mdiv">
      
    {
      cArr.map((elm)=>{
         return(
          <div className="CardChan">
          <img src={elm.img} alt="img" />
         </div>
         )
      })
    }
    </div>
    </>
  )
  
}

export default Channel;
