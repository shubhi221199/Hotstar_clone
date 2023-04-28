import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHotStar from "./Components/NavbarHotStar";
import Tv from "./Components/Tv";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Sports from "./Components/Sports";
import MovieDetail from './Components/MovieDetail';
import PlayMovie from './Components/PlayMovie';
import Genres from './Components/Genres';
import Languages from './Components/Languages';
import ShowByLang from './Components/ShowByLang';
import ShowByGenre from './Components/ShowByGenre';
import Channel from './Components/Channel';
import Login from './Components/Login';
import Subscribe from './Components/Subscribe';

import SearchInp from './Components/SearchInp';
import Footer from './Components/Footer';
// import firebase from './Components/firebase';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarHotStar />
      
       
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Tv" element={<Tv/>}/>
        <Route path="/Movies" element={<Movies/>} />
        <Route path="/Sports" element={<Sports/>}/>
        <Route path="/MovieDetail/:id" element={<MovieDetail/>}/>
        <Route path='/PlayMovie/:id' element={<PlayMovie/>}/>
        <Route path='/Genres' element={<Genres/>}/>
        <Route path='/Languages' element={<Languages/>}/>
        <Route path='/ShowByLang' element={<ShowByLang/>}/>
        <Route path='/ShowByGenre/:id' element={<ShowByGenre/>}/>
        <Route path ='/Channel' element={<Channel/>}/>
        <Route path ='/login' element={<Login/>}/>
        <Route path="/subscribe" element={<Subscribe/>}/>
        <Route path="/search" element={<SearchInp/>}/>
      </Routes>

<div>
  <Footer/>
</div>


    </BrowserRouter>
  );
}

export default App;
