import CatsMeshTakCouch from "./cats-meshtakcouch.jpg";

const Arttevdren = () => {

    return ( 
        <div className="arthomebody container-fluid">
            <div class="header">
                <img src="https://64.media.tumblr.com/553b70bf97d106f026d87c39df09f138/tumblr_o4o0xr1sW11r183xbo1_1280.png" alt="Symmetrical image of Tev and Dren lying in a field" className="tevdrenartheader" />
                <h1>Tevrani and Drenim Omalas</h1>
                <p>A collection of works I've made orbiting my Elder Scrolls III: Morrowind fan characters, Tev and Dren</p>
            </div>

            <div className="artimgrow"> 
                <div className="artimgcolumn2">
                    <img src="https://64.media.tumblr.com/d496e1fd6c5005c6a1c0af22b4152155/tumblr_pa5boa4s5L1r183xbo1_1280.png" alt="Full body image of Tevrani in her default clothing'" className="tevdrenartbody" />
                </div>
            
                <div className="artimgcolumn2">
                    <img src="https://64.media.tumblr.com/8aabde81789414ecf225c0916cf0287b/tumblr_pa5boa4s5L1r183xbo3_1280.png" alt="Full body image of Drenim in his default clothing" className="tevdrenartbody" />
                </div> 
            </div>

            <br/>
            <br/>

            <button type="button" className="btn btn-block" data-bs-toggle="collapse" data-bs-target=".tevdrendesignref">More granular design details here</button>
            <div className="collapse tevdrendesignref">
                <div className="artimgrow">               
                    <div className="artimgcolumn2">
                        <img src="https://64.media.tumblr.com/5f89ef72bb0234c1850a23c888fc9237/tumblr_pa5boa4s5L1r183xbo6_1280.png" alt="Breakdown of Tevrani's outfit layers" className="artimg" />
                    </div>
                    <div className="artimgcolumn2">
                        <img src="https://64.media.tumblr.com/dcf5b11c8922b0863180ceffe83a4445/29014dde115df37d-6d/s1280x1920/c89fa7da2b9d8c80ee648faad752f2f76d9dfd1b.png" alt="Breakdown of Drenim's outfit layers" className="artimg" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Arttevdren;