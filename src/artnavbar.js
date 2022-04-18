import { Link } from "react-router-dom";
import StarfieldFade from "./starfield-fade.png"

const Artnavbar = (props) => {
    const artActivePage = props.activePage;
    const ChangeArtPage = props.ChangeArtPage;

    return (  
        <div className="artnavcenter">
            <img src={StarfieldFade} className="starfieldfadeart" /> 
            <div className="artnav">
                <Link to="/art/home">
                    <span className={artActivePage === "art" ? "artnavactivepage" : "artnavinactivepage"} onClick={()=>{ChangeArtPage("art")}}>Art Home</span>
                </Link>
                <Link to="/art/arttevdren">
                    <span className={artActivePage === "arttevdren" ? "artnavactivepage" : "artnavinactivepage"} onClick={()=>{ChangeArtPage("arttevdren")}}>Tev and Dren</span>
                </Link>
                <Link to="/art/artprintillo">
                    <span className={artActivePage === "artprintillo" ? "artnavactivepage" : "artnavinactivepage"} onClick={()=>{ChangeArtPage("artprintillo")}}>Print and Illustrations</span>
                </Link>
            </div>
        </div>
     );
}
 
export default Artnavbar;