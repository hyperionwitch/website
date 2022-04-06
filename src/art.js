import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Artnavbar from "./artnavbar";
import Artpage2 from "./artpage2";
import Artpage1 from "./artpage1";
import Arthome from "./Arthome";

const Art = (props) => {

    return ( 
        <div className="clearfix row">
            <div className="col-md-3 d-flex justify-content-center">
                <Artnavbar activePage={props.activePage} ChangeArtPage={props.ChangePage}/>
            </div>
            <div className="col-md-9">
                <Routes> 
                    <Route path="home" element={<Arthome />} />
                    <Route path="/" element={<Arthome />} />
                    <Route path="artpage1" element={<Artpage1 />} />
                    <Route path="artpage2" element={<Artpage2 />} /> 
                </Routes>
            </div>
            
        </div>
     );
}
 
export default Art;