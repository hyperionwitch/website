import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Artnavbar from "./artnavbar";
import Artpage2 from "./artpage2";
import Artpage1 from "./artpage1";
import Arthome from "./Arthome";

const Art = (props) => {

    return ( 
        <div className="row">
            <Artnavbar activePage={props.activePage} ChangeArtPage={props.ChangePage}/>
            <Routes> 
                <Route path="home" element={<Arthome />} />
                <Route path="/" element={<Arthome />} />
                <Route path="artpage1" element={<Artpage1 />} />
                <Route path="artpage2" element={<Artpage2 />} /> 
            </Routes>
        </div>
     );
}
 
export default Art;