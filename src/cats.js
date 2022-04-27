import StarfieldFade from "./starfield-fade.png";
import TevDrenMusic from "./tevdren-music-fade.png";
import TevDrenRainy from "./tevdren-rainy-fade.png";
import TevDrenSunsDawn from "./tevdren-sunsdawn-fade.png";
import TevDrenFrostfall from "./tevdren-frostfall-fade.png";
import CatsMeshTakWindow from "./cats-meshtakwindow.jpg";
import CatsMeshDog from "./cats-meshdog.jpg";
import CatsMeshSwitch from "./cats-meshswitch.jpg";
import CatsTakArm from "./cats-takarm.jpg";
import CatsTakBag from "./cats-takbag.jpg";
import CatsMeshTakCouch from "./cats-meshtakcouch.jpg";
import CatsMeshTakViolenmce from "./cats-meshtakviolenmce.jpg";

const Cats = () => {
    // "YOU THERE BOY............WHAT MONTH IS IT"
    const month = new Date().getMonth();

    return ( 
        <div className="catsbody d-flex flex-column">
            <img src={StarfieldFade} className="starfieldfade" />
            <div className="clearfix row gutterfix">
                <div className="col-sm-3 float-start leftcolumn">
                    {/* January = 0, February = 1, etc. */}
                    {[11, 0, 1].includes(month) && <img src={TevDrenFrostfall} className="winterimg" />}
                    {[2, 3, 4].includes(month) && <img src={TevDrenRainy} className="springimg" />}
                    {[5, 6, 7].includes(month) && <img src={TevDrenSunsDawn} className="summerimg" />}
                    {[8, 9, 10].includes(month) && <img src={TevDrenMusic} className="fallimg" />}
                </div>
                <div className="col-sm-9 p-5 float-end rightcolumn">
                    <div className="catscarousel carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target=".catscarousel" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target=".catscarousel" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target=".catscarousel" data-bs-slide-to="2"></button>
                            <button type="button" data-bs-target=".catscarousel" data-bs-slide-to="3"></button>
                            <button type="button" data-bs-target=".catscarousel" data-bs-slide-to="4"></button>
                            <button type="button" data-bs-target=".catscarousel" data-bs-slide-to="5"></button>
                            <button type="button" data-bs-target=".catscarousel" data-bs-slide-to="6"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={CatsMeshTakWindow} alt="Mesh and Tak at the window" className="d-block w-100"/>
                                <div className="carousel-caption">
                                    <span>Mesh and Tak in a rare moment together at the window</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={CatsMeshDog} alt="Mesh, a grey tuxedo cat, sitting on a plush dog" className="d-block w-100" />
                                <div className="carousel-caption">
                                    <span>One of Mesh's favorite spots, atop a squishy dog pillow</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={CatsMeshSwitch} alt="Mesh laying on a Nintendo Switch" className="d-block w-100" />
                                <div className="carousel-caption">
                                    <span>Mesh is also a Gamer Girl<span className="superscript">TM</span></span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={CatsTakArm} alt="Tak, a brown tabby, tucked inside an arm" className="d-block w-100" />
                                <div className="carousel-caption">
                                    <span>Tak is just a little creacher</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={CatsTakBag} alt="Tak laying inside a paper bag" className="d-block w-100" />
                                <div className="carousel-caption">
                                    <span>Lately, Tak has been into caves and cave-like spaces</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={CatsMeshTakCouch} alt="Mesh and Tak on the couch" className="d-block w-100" />
                                <div className="carousel-caption">
                                    <span>Tak loves watching birds--Mesh mostly likes sleeping</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={CatsMeshTakViolenmce} alt="Tak touching Mesh's head" className="d-block w-100" />
                                <div className="carousel-caption">
                                    <span>Mesh doesn't always tolerate Tak's presence, but when she does, Tak makes the most of it</span>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target=".catscarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target=".catscarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Cats;