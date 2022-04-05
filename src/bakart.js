import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import Artnavbar from "./artnavbar";
import Artpage1 from "./artpage1";
import Artpage2 from "./artpage2";

function App() {
    const [artActivePage, setArtActivePage] = useState("art");

    const ChangeArtPage = (newArtPage) => {
        setArtActivePage(newArtPage);
    }

    const cArt = () => {
        return ( 
            <div className="row">
                <div className="leftcolumn">

                <BrowserRouter>
                    <Artnavbar activePage={artActivePage} ChangeArtPage={ChangeArtPage}/>
                    <Routes>  
                        <Route path="/art" element={<Art/>}/>
                        <Route path="/artpage1" element={<Artpage1/>}/>
                        <Route path="/artpage2" element={<Artpage2/>}/> 
                    </Routes>
                </BrowserRouter>

                </div>

                <div className="rightcolumn">
                    <h1>test test</h1>
                    <span>test</span>
                </div>

            </div>
        );
    }
}

export default App;