import { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';
import Movies from './Components/Movies';
import Navbar1 from './Components/NavBar';

import ControlledCarousel from './Components/Movies'
function App() {
  return (
   <>
   <Navbar1/>
   <div style={{height: '50px'}}></div>
<div className= 'moviesList'>
< Movies title = {'Avangers infinty war'} poster = {"https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg"} genre ={` Genre: Action/Superhero`} year={`year: 2018`}/>
 
 <Movies title={'The Wolf of Wallstreet'} poster={'https://i.ytimg.com/vi/J788MZ2uIGA/movieposter_en.jpg'} genre={`Genre: Drama/Comedy`} year={`year: 2013`} />
 <Movies title={'The Good Fellas'} poster={'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'} genre={'Genre: Crime'} year={`year: 1990`}/>
 </div>
 </>
 );
}

export default App;
