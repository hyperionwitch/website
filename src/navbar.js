import { Link } from "react-router-dom";

const Navbar = (props) => {
    const activePage = props.activePage;
    const ChangePage = props.ChangePage;

    return ( 
        <div>
            <div className="topnav">
                <Link to="/homepage">
                    <span className={activePage === "homepage" ? "navactivepage" : "navinactivepage"} onClick={()=>{ChangePage("homepage")}}>Home</span>
                </Link>
                <Link to="/art">
                    <span className={activePage === "art" ? "navactivepage" : "navinactivepage"} onClick={()=>{ChangePage("art")}}>Art</span>
                </Link>
                <Link to="/cats">
                    <span className={activePage === "cats" ? "navactivepage" : "navinactivepage"} onClick={()=>{ChangePage("cats")}}>Cats</span>
                </Link>
                <Link to="/about">
                    <span className={activePage === "about" ? "navactivepage" : "navinactivepage"} onClick={()=>{ChangePage("about")}}>About</span>
                </Link>
            </div>
        </div>
     );
}
 
export default Navbar;