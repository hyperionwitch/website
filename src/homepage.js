import StarfieldFade from "./starfield-fade.png";
import TevDrenMusic from "./tevdrenmusic.png";
import TevDrenHolidays from "./tevdrenholidays.png";
import TevDrenSunsDawn from "./tevdrensunsdawn.png";
import TevDrenEveningStar from "./tevdreneveningstar.png";

const Homepage = () => {
    // "YOU THERE BOY............WHAT MONTH IS IT"
    const month = new Date().getMonth();
    
    return ( 
        <div className="homepagebody d-flex flex-column">
            <img src={StarfieldFade} className="starfieldfade" />
            <div className="clearfix row gutterfix">
                <div className="col-sm-3 float-start leftcolumn">
                    {/* January = 0, February = 1, etc. */}
                    {[11, 0, 1].includes(month) && <img src={TevDrenHolidays} className="winterimg" />}
                    {[2, 3, 4].includes(month) && <img src={TevDrenMusic} className="springimg" />}
                    {[5, 6, 7].includes(month) && <img src={TevDrenSunsDawn} className="summerimg" />}
                    {[8, 9, 10].includes(month) && <img src={TevDrenEveningStar} className="fallimg" />}
                </div>
                <div className="col-sm-9 p-5 float-end rightcolumn">
                    <div className="bodytext">
                        <h2>Welcome to the Test Zone<span className="superscript">TM</span></h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. 
                        Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, 
                        risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent 
                        scelerisque tortor sed accumsan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum 
                        magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget 
                        luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis. Lorem ipsum dolor 
                        sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit 
                        nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam 
                        placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor 
                        sed accumsan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit 
                        amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. 
                        Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in 
                        velit. Praesent scelerisque tortor sed accumsan convallis. Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget 
                        elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, 
                        eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis. Lorem ipsum 
                        dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis 
                        velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam 
                        placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor 
                        sed accumsan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet 
                        pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque 
                        vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. 
                        Praesent scelerisque tortor sed accumsan convallis. Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget 
                        elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, 
                        eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis. Lorem ipsum 
                        dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit 
                        nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, 
                        purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan 
                        convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. 
                        Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus 
                        eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque 
                        tortor sed accumsan convallis.</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Homepage;