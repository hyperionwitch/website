import './App.css';
import Navbar from "./navbar";
import Homepage from "./homepage";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Art from "./art";
import Cats from "./cats";
import About from "./about";
import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("homepage");
  const [artActivePage, setArtActivePage] = useState("art");

  const ChangePage = (newPage) => {
    setActivePage(newPage);
    console.log(activePage);
  }

  const ChangeArtPage = (newPage) => {
    setArtActivePage(newPage);
    console.log(newPage);
  }
  
  return (
    <div className="App">

      <BrowserRouter>
        <div className="pageheader">
          <span className="headertext">Hyperionwitch's Bullshit</span>
          <Navbar activePage={activePage} ChangePage={ChangePage}/>
        </div>
        <Routes>  
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/website" element={<Homepage/>}/> 
          <Route path="/" element={<Homepage/>}/>  
          <Route path="/art/*" element={<Art activePage={artActivePage} ChangePage={ChangeArtPage}/>}/>
          <Route path="/cats" element={<Cats/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>

      <div className="pagefooter">
        <footer className="footer mt-auto py-3">
          <span>footer footer footer</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
