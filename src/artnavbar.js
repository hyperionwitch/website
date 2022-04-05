import { Link } from "react-router-dom";

const Artnavbar = (props) => {
    const artActivePage = props.artActivePage;
    const ChangeArtPage = props.ChangeArtPage;

    return ( 
        <div>
            <div className="artnav">
                <Link to="/art/home">
                    <span className={artActivePage === "art" ? "artnavactivepage" : "artnavinactivepage"} onClick={()=>{ChangeArtPage("art")}}>Art Home</span>
                </Link>
                <Link to="/art/artpage1">
                    <span className={artActivePage === "artpage1" ? "artnavactivepage" : "artnavinactivepage"} onClick={()=>{ChangeArtPage("artpage1")}}>Art Page 1</span>
                </Link>
                <Link to="/art/artpage2">
                    <span className={artActivePage === "artpage2" ? "artnavactivepage" : "artnavinactivepage"} onClick={()=>{ChangeArtPage("artpage2")}}>Art Page 2</span>
                </Link>
            </div>
        </div>
     );
}
 
export default Artnavbar;