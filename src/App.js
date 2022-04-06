import './App.css';
import Navbar from "./navbar";
import Homepage from "./homepage";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Art from "./art";
import Cats from "./cats";
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
      <div className="pageheader">
        <span>Hyperionwitch's Bullshit</span>
      </div>

      <BrowserRouter>
        <Navbar activePage={activePage} ChangePage={ChangePage}/>
        <Routes>  
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/website" element={<Homepage/>}/> 
          <Route path="/" element={<Homepage/>}/>  
          <Route path="/art/*" element={<Art activePage={artActivePage} ChangePage={ChangeArtPage}/>}/>
          <Route path="/cats" element={<Cats/>}/>
        </Routes>
      </BrowserRouter>

      <div className="pagefooter">
        <span>footer babeyyyy</span>
      </div>
    </div>
  );
}

export default App;
