

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Subscribe.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from './Context'


function Subscribe() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(true);
  const [packname,setPackname]= useState("Plan")

  let {fireLogout,logout,isLogin}=useContext(AuthContext)

       let navigate = useNavigate()
   const handlePackage = (pname) => {
       
       let btndivh5 = document.getElementById("btndivh5")
       btndivh5.style.color ="#deb844";
       setPackname(pname);
   }    
  
  const handleLogout = async ()=>{
  
      try{
          await fireLogout ()
            logout()
            navigate("/")
      }
      catch(err){
          console.log(err)
      }
  
    }

    const handleSubscribe = ()=>{
      if(isLogin){
        navigate("/")
      }else{
        alert("Login to subscribe!")
      }
    }

    let data =[
      {
        name:"Super",
        pack:" ₹899/year"

      },
      {
        name:"Premium",
        pack:" ₹1499/year"

      },
      {
        name:"Premium",
        pack:" ₹299/month"

      }
    ]



  return (
    <div className="mainDivsub" style={{ marginTop: "80px" }}>
  
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="ModalHeader" closeButton>
          <Modal.Title className="ModalTitle">
            <div>
              {" "}
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg"
                alt=""
              />
            </div>

            <div className="rightDiv">
              <Dropdown className="mt-2">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  English
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Tamil</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Telugu</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button onClick={handleLogout} variant="primary"> Logout </Button>{" "}
              {/* <Button variant="secondary">Secondary</Button>{' '} */}
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="ModalBody">
          <div>
            {" "}
            <h2>Subscribe now and start streaming</h2>
          </div>

          <div className="divContainer">
          

          <table>
  <tr>
    <th></th>
    <th><h4>Super</h4></th>
    <th><h4>Premium</h4></th>
  </tr>
  <tr>
    <td><h5>All Content<br></br>
Movies,Live Sports,TV, Specials</h5></td>
    <td>

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg>
    
      {/* <Check-lg/> */}
    </td>
    <td>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg>
    </td>
  </tr>
  <tr>
    <td><h5>Watch on TV or Laptop</h5></td>
    <td>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg>
    </td>
    <td>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg>
    </td>
  </tr>
  <tr>
    <td><h5>Ads free movies and shows<br></br> (except Sports)</h5></td>
    <td>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
    </td>
    <td>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg>
    </td>
  </tr>
  <tr>
    <td><h5>Number of devices that <br></br>can be logged in</h5></td>
    <td>2</td>
    <td>4</td>
  </tr>
  <tr>
    <td><h5>Max video quality</h5></td>
    <td>Full HD<br></br>
1080p</td>
    <td>4k<br></br>
2160p</td>
  </tr>
  <tr>
    <td><h5>Max audio quality<br></br>
Atmos available on select titles only</h5></td>
    <td>Dolby Atmos</td>
    <td>Dolby Atmos</td>
  </tr>

  {/* <tr>
    <td><button>Super ₹899/year</button></td>
    <td><button>Premium ₹1499/year</button></td>
    <td><button>Premium ₹299/month</button></td>
  </tr> */}
</table>

<div className="super">
 {
  data.map((elm)=>{
    return (
      <div className="btndiv" onClick={(()=>{handlePackage(elm.name)})}>
        <h6 id="btndivh5">{elm.name}</h6>
        <h6>{elm.pack}</h6>
      </div>
    )
  })
 }
</div>


                  <div >
  <button className="continue" onClick={(()=>{handleSubscribe()})}>Continue with {packname}</button>
</div> 
          </div>
  
        </Modal.Body>
        
      </Modal>
    </div>
  );
}
export default Subscribe;
