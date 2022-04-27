import { Link } from "react-router-dom";
import StarfieldFade from "./starfield-fade.png";
import TevDrenMusic from "./tevdren-music-fade.png";
import TevDrenRainy from "./tevdren-rainy-fade.png";
import TevDrenSunsDawn from "./tevdren-sunsdawn-fade.png";
import TevDrenFrostfall from "./tevdren-frostfall-fade.png";

const About = () => {
    // "YOU THERE BOY............WHAT MONTH IS IT"
    const month = new Date().getMonth();

    return ( 
        <div className="homepagebody d-flex flex-column">
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
                    <div className="bodytext">
                        <h2>About the Artist</h2>
                        <span>Gillian Renk, known in internet spaces as Hyperionwitch, is a skittering mass of goth dust and bird bones, specializing in illustrations and comics.
                            <br />
                            <br />
                            Her assorted other hobbies include a very slow-going cosplay habit and cross-stitching.
                            <br />
                            <br />
                            She is cat-mother to Gilgamesh ("Mesh") and Takane ("Tak").
                        </span>
                        <br />
                        <br />
                        <span>She can also be found at the following social media sites:
                            <br />
                            <br />
                            Tumblr - <a href="https://hyperionwitch-art.tumblr.com/" target="_blank">Hyperionwitch-Art</a>
                            <br />
                            Twitter - <a href="https://twitter.com/hyperionwitch" target="_blank">Hyperionwitch</a>
                            <br />
                            DeviantArt - <a href="https://www.deviantart.com/hyperionwitch" target="_blank">Hyperionwitch</a>
                            <br />
                            Twitch - <a href="https://www.twitch.tv/hyperionwitch" target="_blank">Hyperionwitch</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;