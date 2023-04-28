import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import { List, Search,People_circle } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { AuthContext } from "./Context";
import SearchInp from "./SearchInp";
import { useNavigate } from "react-router-dom";


function NavbarHotStar() {
  const [search, setSearch] = useState("");
  const [movies,setMovies] = useState([])
   const navigate = useNavigate()
    
  let {isLogin}=useContext(AuthContext)
  let apiKey = "939cb94eb1470cd3b74b2ec575a26449";
  let url =`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;

  const getData = (search) => {
    axios.get(`${url}&language=en-US&query=${search}&page=1&include_adult=false`)
    
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results)
          
      });
  };

  useEffect(() => {
     const idSearch = setTimeout(()=>{
    getData(search);
     },.100)

     return ()=>{
       clearTimeout(idSearch)
     }
  }, [search]);

  const showDropdown = () => {
    document.querySelector(".dropdown-content").style.display = "block";
  };

  const handleSearchbar = (id)=>{
     setSearch("")
     navigate(`/MovieDetail/${id}`)
  }

  return (
    <>
    <Navbar fixed="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container className="navCont">
        <Navbar.Brand href="">
          <div className="dropdown">
            {/* <button class="dropbtn">Dropdown</button> */}
            <span>
              {" "}
              <List
                // onClick={() => {
                //   showDropdown();
                // }}
                className="list"
              />{" "}
            </span>
            <div className="dropdown-content">
              <Link to="/Channel">
                <img
                  className="Clogo"
                  src="https://lh3.ggpht.com/MPndj4KtVlLgFC1IC2BE6e2Gbx_ylMCnWnbIUduAMhmQ3KZowrQtHq_BgaPGsH6onwrP=w1200-h630-p-k-no-nu"
                  alt="lang"
                />{" "}
                &nbsp; Channels
              </Link>
              <Link to="/Languages">
                <img
                  className="Llogo"
                  src="https://w1.pngwing.com/pngs/101/401/png-transparent-language-icon-circle-pictogram-black-and-white-line-symbol-logo-emblem.png"
                  alt="lang"
                />{" "}
                &nbsp; Language
              </Link>
              <Link to="/Genres">
                <img
                  className="Glogo"
                  src="	https://cdn2.iconfinder.com/data/icons/movie-icons/512/Theatre_Masks-1024.png"
                  alt="Glogo"
                />{" "}
                &nbsp; Genres
              </Link>
            </div>
          </div>

          <Link to="/">
            <img
              className="imgdisney"
              src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className="dropdownA">
              <Link className="navlinks" to="/TV">
                TV
              </Link>
              <div class="dropdown-contentA">
                <a href="#">Star Plus</a>
                <a href="#">Star Bharat</a>
                <a href="#">Hotstar Special</a>
                <a href="#">Star Prvah</a>
                <a href="#">Star jalsha</a>
                <a href="#">Star maa</a>
                <a href="#">Star vijay</a>
                <a href="#">more</a>
              
              </div>
            </div>

            <div class="dropdownA">
              <Link className="dropbtnA" to="/Movies">
                Movies
              </Link>
              {/* <button class="dropbtn">Dropdown</button> */}
              <div class="dropdown-contentA">
                <a href="#">Hindi</a>
                <a href="#">English</a>
                <a href="#">Telugu</a>
                <a href="#">Tamil</a>
                <a href="#">Malayalam</a>
                <a href="#">Marathi</a>
                <a href="#">Bengali</a>
                <a href="#">Japanese</a>
                <a href="#">Korean</a>
                <a href="#">Kannda</a>
                <a href="#">Odia</a>
              </div>
            </div>


          <div className="dropdownA"> <Link className="navlinks" to="/Sports">
              Sports
            </Link>
            <div class="dropdown-contentA">
                <a href="#">Hindi</a>
                <a href="#">English</a>
                <a href="#">Telugu</a>
                <a href="#">Tamil</a>
                <a href="#">Malayalam</a>
                <a href="#">Marathi</a>
                <a href="#">Bengali</a>
                <a href="#">Japanese</a>
                <a href="#">Korean</a>
                <a href="#">Kannda</a>
                <a href="#">Odia</a>
              </div>
            </div>
           





            <Link className="navlinks" to="/">
              Disney+
            </Link>

            <button className="kidbtn">
              <img
                src="	https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg"
                alt=""
              />
            </button>
          </Nav>
          <Nav>
            <input
              className="search"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Search className="searchicon" />

      
   

           {/* <div> 
            {
              movies.map((elm)=>{
                return (
                  <div>
                    <img width={"60px"}
                       src={`https://image.tmdb.org/t/p/original${elm.backdrop_path}`}  
                    alt="elm" />
                    <h2 style={{color:"red", marginTop:"100px"}}>{elm.title}</h2>
                  </div>
                )
              })
            }
            </div> */}



            <div className="loginbtn">
           <Link to = "/subscribe"><Button as="input" type="submit" value="Subscribe" size="sm" />{" "}</Link>   



           {!isLogin? <Link to="/login"><Button variant="dark">Login</Button>{" "}</Link>: 
            <Button variant="secondary">Admin</Button> }   
             


            </div>
          </Nav>

         
        </Navbar.Collapse>


        
      </Container>
    </Navbar>

    <div>
       { search==""? null : <div>
       <div className='movDiv'> 
            {
              movies.map((elm)=>{
                return (
              <div  onClick={(()=>{
                handleSearchbar(elm.id)
               })} className='movCard'>
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
       }
    </div>
     </>
  );
}

export default NavbarHotStar;
