import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Artnavbar from "./artnavbar";
import Artprintillo from "./artprintillo";
import Arttevdren from "./arttevdren";
import Arthome from "./Arthome";

const Art = (props) => {

    return ( 
        <div className="clearfix row">
            <div className="col-md-3 d-flex justify-content-center">
                <Artnavbar activePage={props.activePage} ChangeArtPage={props.ChangePage}/>
            </div>
            <div className="col-md-9 p-5 artrightcolumn">
                <Routes> 
                    <Route path="home" element={<Arthome />} />
                    <Route path="/" element={<Arthome />} />
                    <Route path="arttevdren" element={<Arttevdren />} />
                    <Route path="artprintillo" element={<Artprintillo />} /> 
                </Routes>
            </div>
        </div>
     );
}
 
export default Art;