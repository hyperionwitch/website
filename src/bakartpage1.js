import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import Artnavbar from "./artnavbar";
import Art from "./art";
import Artpage2 from "./artpage2";

function App() {
    const [artActivePage, setArtActivePage] = useState("art");

    const ChangeArtPage = (newArtPage) => {
        setArtActivePage(newArtPage);
    }

    const Artpage1 = () => {
        return ( 
            <div className="row">
                <div className="leftcolumn">

                <BrowserRouter>
                    <Artnavbar activePage={artActivePage} ChangeArtPage={ChangeArtPage}/>
                    <Routes>  
                        <Route path="/art" element={<Art/>}/>
                        <Route path="/art/artpage1" element={<Artpage1/>}/>
                        <Route path="/art/artpage2" element={<Artpage2/>}/> 
                    </Routes>
                </BrowserRouter>

                </div>
                <span className="rightcolumn">test</span>
            </div>
        );
    }
}

export default App;