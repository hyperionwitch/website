import {useState} from "react";

const Arttevdren = () => {
    const [modalActive, setModalActive] = useState(false);

    const [modalSource, setModalSource] = useState("");
    
    const modalOpenHandler = (newModal) => {
        setModalActive(true);
        const img = document.getElementById(newModal);
        setModalSource(img.src);
    }
    const modalCloseHandler = () => {
        setModalActive(false);
    }

    return ( 
        <div className="arthomebody container-fluid">
            <div class="bodytext">
                {/* Header image and description */}
                <img src="https://64.media.tumblr.com/553b70bf97d106f026d87c39df09f138/tumblr_o4o0xr1sW11r183xbo1_1280.png" alt="Symmetrical image of Tev and Dren lying in a field" className="tevdrenartheader" />
                <h1>Tevrani and Drenim Omalas</h1>
                <p>A collection of works I've made orbiting my Elder Scrolls III: Morrowind fan characters, Tev and Dren<br/>(And yes, there is enough content here to justify its own page.)</p>
            </div>

            { modalActive && <div onClick={()=>{modalCloseHandler()}} className="modal">
                <img className="modalcontent" id="modalimg" src={modalSource}/>
            </div>}

            <br/>

            {/* Full body art of basic designs */}
            <h2>Character Designs</h2>
            <div className="artimgrow"> 
                <div className="artimgcolumn2">
                    <img onClick={()=>{modalOpenHandler("modal-tevfullbody")}} id="modal-tevfullbody" src="https://64.media.tumblr.com/d496e1fd6c5005c6a1c0af22b4152155/tumblr_pa5boa4s5L1r183xbo1_1280.png" alt="Full body image of Tevrani in her default clothing'" className="tevdrenartbody" />
                    <h4>Tevrani</h4>
                    <p>Healer, self-taught mage, and all-around grouch.<br/>Oh--and, by agonizingly well-thought-out choice, Nerevarine.</p>
                </div>
            
                <div className="artimgcolumn2">
                    <img onClick={()=>{modalOpenHandler("modal-drenfullbody")}} id="modal-drenfullbody" src="https://64.media.tumblr.com/8aabde81789414ecf225c0916cf0287b/tumblr_pa5boa4s5L1r183xbo3_1280.png" alt="Full body image of Drenim in his default clothing" className="tevdrenartbody" />
                    <h4>Drenim</h4>
                    <p>Bard, sneaky-type (formerly), and incorrigable flirt.<br/>So good at keeping secrets, you might not know he has any.</p>
                </div> 
            </div>

            <br/>


            {/* Collapsible button that reveals additional design details */}
            <button type="button" className="btn btn-block design-details-button" data-bs-toggle="collapse" data-bs-target=".tevdrendesignref">Click here for more design details</button>
            <div className="collapse tevdrendesignref">
                <div className="artimgrow">               
                    <div className="artimgcolumn2">
                        <img onClick={()=>{modalOpenHandler("modal-tevdesign")}} id="modal-tevdesign" src="https://64.media.tumblr.com/5f89ef72bb0234c1850a23c888fc9237/tumblr_pa5boa4s5L1r183xbo6_1280.png" alt="Breakdown of Tevrani's outfit layers" className="artimg" />
                    </div>
                    <div className="artimgcolumn2">
                        <img onClick={()=>{modalOpenHandler("modal-drendesign")}} id="modal-drendesign" src="https://64.media.tumblr.com/dcf5b11c8922b0863180ceffe83a4445/29014dde115df37d-6d/s1280x1920/c89fa7da2b9d8c80ee648faad752f2f76d9dfd1b.png" alt="Breakdown of Drenim's outfit layers" className="artimg" />
                    </div>
                </div>
            </div>

            <br/>
            <br/>

            {/* Comics */}
            <h2>Comics</h2>
            <p>Though these are being drawn out of order, I've assembled them into their chronological order here for easier reading</p>
            {/* PUT CARDS HERE */}
            <div className="container">
                <div className="d-flex flex-wrap comic-cards">
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df43k2r-9962ae0b-9901-4f1c-a663-43544be51f26.png/v1/fill/w_900,h_2586,q_80,strp/tev_and_dren___arrival_in_vvardenfell_by_hyperionwitch_df43k2r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU4NiIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0M2syci05OTYyYWUwYi05OTAxLTRmMWMtYTY2My00MzU0NGJlNTFmMjYucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X4jN7JOlNFh4fLO78kT5nGnNU4EjlKhIE5CSG8jA-rQ" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df43k2r-9962ae0b-9901-4f1c-a663-43544be51f26.png/v1/fill/w_900,h_2586,q_80,strp/tev_and_dren___arrival_in_vvardenfell_by_hyperionwitch_df43k2r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU4NiIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0M2syci05OTYyYWUwYi05OTAxLTRmMWMtYTY2My00MzU0NGJlNTFmMjYucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X4jN7JOlNFh4fLO78kT5nGnNU4EjlKhIE5CSG8jA-rQ" alt="Arrival in Vvardenfell" />
                            <div className="card-body">
                                <h5 className="card-title">Arrival in Vvardenfell</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df43kqq-c2d8ef07-7bef-4c94-94f7-e1c18e5d8efa.png/v1/fill/w_900,h_4871,q_80,strp/tev_and_dren___the_first_meeting_by_hyperionwitch_df43kqq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDg3MSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0M2txcS1jMmQ4ZWYwNy03YmVmLTRjOTQtOTRmNy1lMWMxOGU1ZDhlZmEucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BctP_3h0GGBWFaqSghSDXx_hWMND1LSqFW6hAXE5U3U" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df43kqq-c2d8ef07-7bef-4c94-94f7-e1c18e5d8efa.png/v1/fill/w_900,h_4871,q_80,strp/tev_and_dren___the_first_meeting_by_hyperionwitch_df43kqq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDg3MSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0M2txcS1jMmQ4ZWYwNy03YmVmLTRjOTQtOTRmNy1lMWMxOGU1ZDhlZmEucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BctP_3h0GGBWFaqSghSDXx_hWMND1LSqFW6hAXE5U3U" alt="The First Meeting" />
                            <div className="card-body">
                                <h5 className="card-title">The First Meeting</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df43l13-b2a9a28b-2a5b-4fa9-af03-341e6324381c.png/v1/fill/w_900,h_3495,q_80,strp/tev_and_dren___first_robbery_foiled_by_hyperionwitch_df43l13-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQ5NSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0M2wxMy1iMmE5YTI4Yi0yYTViLTRmYTktYWYwMy0zNDFlNjMyNDM4MWMucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LGbrB1rLbKgIRo8L0i42L9n8j5XF8w_z5DEFaiKs6v4" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df43l13-b2a9a28b-2a5b-4fa9-af03-341e6324381c.png/v1/fill/w_900,h_3495,q_80,strp/tev_and_dren___first_robbery_foiled_by_hyperionwitch_df43l13-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQ5NSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0M2wxMy1iMmE5YTI4Yi0yYTViLTRmYTktYWYwMy0zNDFlNjMyNDM4MWMucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LGbrB1rLbKgIRo8L0i42L9n8j5XF8w_z5DEFaiKs6v4" alt="First Robbery Foiled" />
                            <div className="card-body">
                                <h5 className="card-title">First Robbery Foiled</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df43ld3-e39faaa1-f798-477a-a9c0-9ed1c6e535e0.png/v1/fill/w_900,h_9660,q_80,strp/tev_and_dren___getting_in_the_way_by_hyperionwitch_df43ld3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTY2MCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0M2xkMy1lMzlmYWFhMS1mNzk4LTQ3N2EtYTljMC05ZWQxYzZlNTM1ZTAucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CgtxCpfWxebhykWEO7EePdNiV3zbAjhf27ixHxABPrk" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df43ld3-e39faaa1-f798-477a-a9c0-9ed1c6e535e0.png/v1/fill/w_900,h_9660,q_80,strp/tev_and_dren___getting_in_the_way_by_hyperionwitch_df43ld3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTY2MCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0M2xkMy1lMzlmYWFhMS1mNzk4LTQ3N2EtYTljMC05ZWQxYzZlNTM1ZTAucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CgtxCpfWxebhykWEO7EePdNiV3zbAjhf27ixHxABPrk" alt="Getting in the Way" />
                            <div className="card-body">
                                <h5 className="card-title">Getting in the Way</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4ecoc-49a23da1-a05e-485c-84ef-a3b211732b90.png/v1/fill/w_1024,h_3743,q_80,strp/tev_and_dren___a_rocky_start_by_hyperionwitch_df4ecoc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzc0MyIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZWNvYy00OWEyM2RhMS1hMDVlLTQ4NWMtODRlZi1hM2IyMTE3MzJiOTAucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4qDnAFDDqDJcbQBIF_f-YSqBJRM9VJVwn-gSlNcBqMQ" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4ecoc-49a23da1-a05e-485c-84ef-a3b211732b90.png/v1/fill/w_1024,h_3743,q_80,strp/tev_and_dren___a_rocky_start_by_hyperionwitch_df4ecoc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzc0MyIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZWNvYy00OWEyM2RhMS1hMDVlLTQ4NWMtODRlZi1hM2IyMTE3MzJiOTAucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4qDnAFDDqDJcbQBIF_f-YSqBJRM9VJVwn-gSlNcBqMQ" alt="A Rocky Start" />
                            <div className="card-body">
                                <h5 className="card-title">A Rocky Start</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4ed0y-bdc03424-14f9-481f-b2de-412f3525e5e1.png/v1/fill/w_1024,h_3969,q_80,strp/tev_and_dren___several_weeks_in_by_hyperionwitch_df4ed0y-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzk2OSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZWQweS1iZGMwMzQyNC0xNGY5LTQ4MWYtYjJkZS00MTJmMzUyNWU1ZTEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qdpQ-DHH08Gos9BpgAWUOoHzA9rGONiB_hqEA1IIXW0" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4ed0y-bdc03424-14f9-481f-b2de-412f3525e5e1.png/v1/fill/w_1024,h_3969,q_80,strp/tev_and_dren___several_weeks_in_by_hyperionwitch_df4ed0y-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzk2OSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZWQweS1iZGMwMzQyNC0xNGY5LTQ4MWYtYjJkZS00MTJmMzUyNWU1ZTEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qdpQ-DHH08Gos9BpgAWUOoHzA9rGONiB_hqEA1IIXW0" alt="Several Weeks In" />
                            <div className="card-body">
                                <h5 className="card-title">Several Weeks In</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4ed4m-be3a1737-f8cc-47fb-8172-19fbe2de9566.png/v1/fill/w_1024,h_6858,q_80,strp/tev_and_dren___pressing_for_answers_by_hyperionwitch_df4ed4m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg1OCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZWQ0bS1iZTNhMTczNy1mOGNjLTQ3ZmItODE3Mi0xOWZiZTJkZTk1NjYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ljk1u90-rX6-Odn0uEWJ5DGc0N0H6qzSPAbU0AhdoQs" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4ed4m-be3a1737-f8cc-47fb-8172-19fbe2de9566.png/v1/fill/w_1024,h_6858,q_80,strp/tev_and_dren___pressing_for_answers_by_hyperionwitch_df4ed4m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg1OCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZWQ0bS1iZTNhMTczNy1mOGNjLTQ3ZmItODE3Mi0xOWZiZTJkZTk1NjYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ljk1u90-rX6-Odn0uEWJ5DGc0N0H6qzSPAbU0AhdoQs" alt="Pressing for Answers" />
                            <div className="card-body">
                                <h5 className="card-title">Pressing for Answers</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4ed90-de7eb5a1-05cd-487d-a250-c3add69d086c.png/v1/fill/w_1024,h_5055,q_80,strp/tev_and_dren___a_heartfelt_conversation_by_hyperionwitch_df4ed90-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA1NSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZWQ5MC1kZTdlYjVhMS0wNWNkLTQ4N2QtYTI1MC1jM2FkZDY5ZDA4NmMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KYWEuKnPEiK7lHW83RpKAur-S75RS_192LfzbsONgQ8" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4ed90-de7eb5a1-05cd-487d-a250-c3add69d086c.png/v1/fill/w_1024,h_5055,q_80,strp/tev_and_dren___a_heartfelt_conversation_by_hyperionwitch_df4ed90-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA1NSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZWQ5MC1kZTdlYjVhMS0wNWNkLTQ4N2QtYTI1MC1jM2FkZDY5ZDA4NmMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KYWEuKnPEiK7lHW83RpKAur-S75RS_192LfzbsONgQ8" alt="A Heartfelt Conversation" />
                            <div className="card-body">
                                <h5 className="card-title">A Heartfelt Conversation</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4edc1-6f6f858b-8f66-47e4-9676-d7a83c6d4aeb.png/v1/fill/w_1024,h_4233,q_80,strp/tev_and_dren___the_journey_begins_by_hyperionwitch_df4edc1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDIzMyIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZWRjMS02ZjZmODU4Yi04ZjY2LTQ3ZTQtOTY3Ni1kN2E4M2M2ZDRhZWIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.u7gkfNFMQUMvqseJTWhSEDay2AMB_zgc69DtRzsuYQY" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4edc1-6f6f858b-8f66-47e4-9676-d7a83c6d4aeb.png/v1/fill/w_1024,h_4233,q_80,strp/tev_and_dren___the_journey_begins_by_hyperionwitch_df4edc1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDIzMyIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZWRjMS02ZjZmODU4Yi04ZjY2LTQ3ZTQtOTY3Ni1kN2E4M2M2ZDRhZWIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.u7gkfNFMQUMvqseJTWhSEDay2AMB_zgc69DtRzsuYQY" alt="The Journey Begins" />
                            <div className="card-body">
                                <h5 className="card-title">The Journey Begins</h5>
                            </div>
                        </div>
                    </a>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Arkngthand, Part 1" />
                            <div className="card-body">
                                <h5 className="card-title">Arkngthand, Part 1</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Arkngthand, Part 2" />
                            <div className="card-body">
                                <h5 className="card-title">Arkngthand, Part 2</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="After Arkngthand" />
                            <div className="card-body">
                                <h5 className="card-title">After Arkngthand</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="The First Dream" />
                            <div className="card-body">
                                <h5 className="card-title">The First Dream</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="On the Road to Andrano Tomb" />
                            <div className="card-body">
                                <h5 className="card-title">On the Road to Andrano Tomb</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="The Second Dream" />
                            <div className="card-body">
                                <h5 className="card-title">The Second Dream</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Nicknames" />
                            <div className="card-body">
                                <h5 className="card-title">Nicknames</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Vivec Informant Wrap Up" />
                            <div className="card-body">
                                <h5 className="card-title">Vivec Informant Wrap Up</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="The Third Dream" />
                            <div className="card-body">
                                <h5 className="card-title">The Third Dream</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Back from Vivec, Part 1" />
                            <div className="card-body">
                                <h5 className="card-title">Back from Vivec, Part 1</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Back from Vivec, Part 2" />
                            <div className="card-body">
                                <h5 className="card-title">Back from Vivec, Part 2</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Homeownership" />
                            <div className="card-body">
                                <h5 className="card-title">Homeownership</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Late Night Visit" />
                            <div className="card-body">
                                <h5 className="card-title">Late Night Visit</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Sleepers Awake" />
                            <div className="card-body">
                                <h5 className="card-title">Sleepers Awake</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="The Fourth Dream" />
                            <div className="card-body">
                                <h5 className="card-title">The Fourth Dream</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Nerevarine News" />
                            <div className="card-body">
                                <h5 className="card-title">Nerevarine News</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Apology and a Gift" />
                            <div className="card-body">
                                <h5 className="card-title">Apology and a Gift</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Bonding with the Urshilaku" />
                            <div className="card-body">
                                <h5 className="card-title">Bonding with the Urshilaku</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="First Wise Woman Wrap Up" />
                            <div className="card-body">
                                <h5 className="card-title">First Wise Woman Wrap Up</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Heading to Ilunibi" />
                            <div className="card-body">
                                <h5 className="card-title">Heading to Ilunibi</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="ilunibi" />
                            <div className="card-body">
                                <h5 className="card-title">Ilunibi</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/f718d5ec09d2d7b1857df01d45045e23/tumblr_okol5cu3mt1r183xbo1_r1_1280.png" alt="Battle with Dagoth Gares" />
                            <div className="card-body">
                                <h5 className="card-title">Battle with Dagoth Gares</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Corprus Drama, Part 1" />
                            <div className="card-body">
                                <h5 className="card-title">Corprus Drama, Part 1</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Corprus Drama, Part 2" />
                            <div className="card-body">
                                <h5 className="card-title">Corprus Drama, Part 2</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Downtime in Balmora" />
                            <div className="card-body">
                                <h5 className="card-title">Downtime in Balmora</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Confession at Ghostgate" />
                            <div className="card-body">
                                <h5 className="card-title">Confession at Ghostgate</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="A Hard Decision" />
                            <div className="card-body">
                                <h5 className="card-title">A Hard Decision</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Battle with Dagoth Ur, Part 1" />
                            <div className="card-body">
                                <h5 className="card-title">Battle with Dagoth Ur, Part 1</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="Battle with Dagoth Ur, Part 2" />
                            <div className="card-body">
                                <h5 className="card-title">Battle with Dagoth Ur, Part 2</h5>
                            </div>
                        </div>
                        <div className="card comic-thumbnail m-auto mb-3">
                            <img className="card-img-top" src="https://64.media.tumblr.com/6223fd038fca1c71bc070865877d6f4c/tumblr_pqhwsvFEaf1r183xbo2_1280.png" alt="After the Battle" />
                            <div className="card-body">
                                <h5 className="card-title">After the Battle</h5>
                            </div>
                        </div>
                </div>

            </div>

            <br/>
            <br/>

            {/* Seasonal illustrations */}
            <h2>Monthly Illustrations</h2>
            <div className="artimgrow">
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-tevdrenmorningstar")}} id="modal-tevdrenmorningstar" src="https://64.media.tumblr.com/f7165f2cfdeb79f05393cb16e04f0aa2/tumblr_p3cz4yF0pR1r183xbo1_1280.png" alt="Tev, Dren, and Arvo on their balcony at sunset" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-tevdrenlastseed")}} id="modal-tevdrenlastseed" src="https://64.media.tumblr.com/506e601e5c4f98bc3eeb2e15703e2ee8/tumblr_plrdcxuC6W1r183xbo1_1280.png" alt="Tev and Dren standing in ankle-deep swamp water as they collect flowers" className="artimg" />
                </div>
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-tevdrensunsdawn")}} id="modal-tevdrensunsdawn" src="https://64.media.tumblr.com/04b1d3d640f277cdcee6d9cb6b172431/tumblr_p66gynZpXR1r183xbo1_1280.png" alt="Tev and Dren checking their map in the Ashlands while Arvo explores in the background" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-tevdrenhearthfire")}} id="modal-tevdrenhearthfire" src="https://64.media.tumblr.com/89d6ceec8443865b81f7310c45327c4b/54889ab44edc4228-ef/s1280x1920/61890661f65b39ae5f0e0a68a7981b7ece270d67.png" alt="Tev chuckling at Dren being over dramatic about Arvo standing on top of him in an Ashlander yurt" className="artimg" />
                </div>
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-tevfirstseed")}} id="modal-tevdrenfirstseed" src="https://64.media.tumblr.com/009d3fa3055bf6e34043613d36155a61/tumblr_phc0x5myss1r183xbo1_1280.png" alt="Tev and Dren chatting at a table over a dinner of bread, keggs, rice, and stew while Arvo sleeps in the back" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-tevdrenfrostfall")}} id="modal-tevdrenfrostfall" src="https://64.media.tumblr.com/781656d8396ebd6be93d1d5efc1ccc29/5cfad9e7cca7bcc7-65/s1280x1920/2de6e295cb0fc8030d924500e4b1efaa56a53d34.png" alt="Tev and Dren at a campfire at dusk" className="artimg" />
                </div>
                <div className="artimgcolumn">
                <img onClick={()=>{modalOpenHandler("modal-tevdrensunsheight")}} id="modal-tevdrensunsheight" src="https://64.media.tumblr.com/f9a752502e443f928a835f23dcd72f49/322d8cd3c7e16ae4-dd/s1280x1920/80e4cfb746dd5b3604fe8b26224ceb7e5479122b.png" alt="Tev and Dren standing in a grasslands field at sundown and looking out wistfully" className="artimg" />
                </div>
            </div>

            <br/>
            <br/>

            {/* Paired illustrations */}
            <h2>Paired Illustrations</h2>
                <div className="artimgrow">
                    <div className="artimgcolumn2">
                        <img onClick={()=>{modalOpenHandler("modal-drenpinup")}} id="modal-drenpinup" src="https://64.media.tumblr.com/9183338a866b359eca9ae4523ce8b429/tumblr_ov2mqjme1S1r183xbo2_r1_1280.png" alt="Dren in his bedroom, shirtless and shaving" className="artimg" />
                        <img onClick={()=>{modalOpenHandler("modal-tevhorrorscars")}} id="modal-tevhorrorscars" src="https://64.media.tumblr.com/468c68d951b695987e62687ce02ce848/8d63b33875a9dc83-4a/s1280x1920/c0ca8766a53f7fb11799a4696006a975b60f6b11.png" alt="Tev, drawn in light lines on black, with her scars in red" className="artimg" />
                        <img onClick={()=>{modalOpenHandler("modal-tevantique")}} id="modal-tevantique" src="https://64.media.tumblr.com/9d0d9bb4a409c1eeffa4fe1ed9cd03aa/3e521c550e6d07c8-b6/s1280x1920/333a876fced4f8e99b7dea8dc9d9c9f5966510a8.png" alt="Tev painted in the style of an antique portrait" className="artimg" />
                    </div>
                    <div className="artimgcolumn2">
                        <img onClick={()=>{modalOpenHandler("modal-tevpinup")}} id="modal-tevpinup" src="https://64.media.tumblr.com/185e16f298a202c34cc49d14f72b8165/tumblr_ov2mqjme1S1r183xbo1_r1_1280.png" alt="Tev in her bedroom, reading while wearing a loose robe" className="artimg" />
                        <img onClick={()=>{modalOpenHandler("modal-drenhorrorscars")}} id="modal-drenhorrorscars" src="https://64.media.tumblr.com/bdebe4879bb78eea709160772bf0cce3/8d63b33875a9dc83-83/s1280x1920/6ae5c8b9428e92e3a71bbc58167c13aa0b6decf4.png" alt="Dren, drawn in light lines on black, with his scars in red" className="artimg" />
                        <img onClick={()=>{modalOpenHandler("modal-drenantique")}} id="modal-drenantique" src="https://64.media.tumblr.com/a52a30f44a314997493b0ce4ca39395d/3e521c550e6d07c8-ae/s1280x1920/e7522ad39ab2fd6659fdc9b50c60d8910a1371a5.png" alt="Dren painted in the style of an antique portrait" className="artimg" />
                    </div>
                </div>

            <br/>
            <br/>
            
            {/* Miscellaneous illustrations */}
            <h2>Miscellaneous Illustrations</h2>
            <div className="artimgrow">
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-tevkintsukuroi")}} id="modal-tevkintsukuroi" src="https://64.media.tumblr.com/3c5c4bd1bd642eb2b6ff04aaa2a0e977/tumblr_o5v6zirzUp1r183xbo1_1280.png" alt="Tev in blue shades with her scars in gold" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-tevdrenholidays2017")}} id="modal-tevdrenholidays2017" src="https://64.media.tumblr.com/0d1f09fd923b3e7df53edc1cb4afc7ac/tumblr_p0rj7lk44f1r183xbo1_1280.png" alt="Tev and Dren seated on the floor with Arvo, Tev working on alchemy and Dren braiding flowers" className="artimg" />
                </div>
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-tevpainting")}} id="modal-tevpainting" src="https://64.media.tumblr.com/184f9649244664d6bc57e11d5f0db22e/tumblr_oce8peXZe51r183xbo1_1280.png" alt="Tev seated in front of a statue of Azura with her spear, surrounded by potions and candles" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-tevdrenmusic")}} id="modal-tevdrenmusic" src="https://64.media.tumblr.com/704b51db56b144f8f1507e08e1d810b2/tumblr_pdsupotyNx1r183xbo1_1280.png" alt="Dren teaching Tev how to play lute while she sits in his lap" className="artimg" />
                </div>
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-tevdrenholidays2016")}} id="modal-tevdrenholidays20176" src="https://64.media.tumblr.com/9510c9a901a5f1ab42d2eca546ef2983/tumblr_oixmgflHir1r183xbo1_r1_1280.png" alt="Tev and Dren sitting together and relaxing, Tev with a cup of tea and Dren with his lute" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-tevdrenscars")}} id="modal-tevdrenscars" src="https://64.media.tumblr.com/6627510e1c1280e3dd09280739a882d3/f39abef916302100-89/s1280x1920/988c1346cee81c4e50a8954d91135e4cf6d372a1.png" alt="Tev and Dren embracing and examining each others' scars" className="artimg" />
                </div>
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-tevdrenrainy")}} id="modal-tevdrenrainy" src="https://64.media.tumblr.com/0a161ff1a4f8ff3cbec819cc4bfeec9a/tumblr_opxsq61iHC1r183xbo1_1280.png" alt="Tev and Dren laughing in an archway as they dry off from being caught in the rain" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-tevdrenfield")}} id="modal-tevdrenfield" src="https://64.media.tumblr.com/553b70bf97d106f026d87c39df09f138/tumblr_o4o0xr1sW11r183xbo1_1280.png" alt="Symmetrical image of Tev and Dren lying in a field" className="artimg" />
                </div>
            </div>
        </div>
     );
}
 
export default Arttevdren;