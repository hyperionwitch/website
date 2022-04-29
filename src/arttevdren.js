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
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4g8vs-8659a348-0e38-4148-8113-950c2ab7a256.png/v1/fill/w_1024,h_3139,q_80,strp/tev_and_dren___arkngthand__part_1_by_hyperionwitch_df4g8vs-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzEzOSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Zzh2cy04NjU5YTM0OC0wZTM4LTQxNDgtODExMy05NTBjMmFiN2EyNTYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nqNcpQ7hDT2zjD6hLd9PdlVsRUmrnJkhCSwUxiA3EzM" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4g8vs-8659a348-0e38-4148-8113-950c2ab7a256.png/v1/fill/w_1024,h_3139,q_80,strp/tev_and_dren___arkngthand__part_1_by_hyperionwitch_df4g8vs-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzEzOSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Zzh2cy04NjU5YTM0OC0wZTM4LTQxNDgtODExMy05NTBjMmFiN2EyNTYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nqNcpQ7hDT2zjD6hLd9PdlVsRUmrnJkhCSwUxiA3EzM" alt="Arkngthand, Part 1" />
                            <div className="card-body">
                                <h5 className="card-title">Arkngthand, Part 1</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4g8zk-25c439a7-8378-4214-82d1-a4d09d200e92.png/v1/fill/w_1024,h_3128,q_80,strp/tev_and_dren___arkngthand__part_2_by_hyperionwitch_df4g8zk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzEyOCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Zzh6ay0yNWM0MzlhNy04Mzc4LTQyMTQtODJkMS1hNGQwOWQyMDBlOTIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4wPqYCE12AgK2BbqUJ1qwXkrh-WnS6XAs0mDeAiCmgQ" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4g8zk-25c439a7-8378-4214-82d1-a4d09d200e92.png/v1/fill/w_1024,h_3128,q_80,strp/tev_and_dren___arkngthand__part_2_by_hyperionwitch_df4g8zk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzEyOCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Zzh6ay0yNWM0MzlhNy04Mzc4LTQyMTQtODJkMS1hNGQwOWQyMDBlOTIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4wPqYCE12AgK2BbqUJ1qwXkrh-WnS6XAs0mDeAiCmgQ" alt="Arkngthand, Part 2" />
                            <div className="card-body">
                                <h5 className="card-title">Arkngthand, Part 2</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4g931-f936529f-67d7-43c1-b42f-73c64dec62db.png/v1/fill/w_1024,h_3105,q_80,strp/tev_and_dren___after_arkngthand_by_hyperionwitch_df4g931-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzEwNSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZzkzMS1mOTM2NTI5Zi02N2Q3LTQzYzEtYjQyZi03M2M2NGRlYzYyZGIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qaF6mvAc6pn9mmM8RdqKkIK3_qQEFOeV4MvM8-M0Bcc" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4g931-f936529f-67d7-43c1-b42f-73c64dec62db.png/v1/fill/w_1024,h_3105,q_80,strp/tev_and_dren___after_arkngthand_by_hyperionwitch_df4g931-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzEwNSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZzkzMS1mOTM2NTI5Zi02N2Q3LTQzYzEtYjQyZi03M2M2NGRlYzYyZGIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qaF6mvAc6pn9mmM8RdqKkIK3_qQEFOeV4MvM8-M0Bcc" alt="After Arkngthand" />
                            <div className="card-body">
                                <h5 className="card-title">After Arkngthand</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4g965-198a3092-001d-4232-8d7b-7b2011cf2161.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Zzk2NS0xOThhMzA5Mi0wMDFkLTQyMzItOGQ3Yi03YjIwMTFjZjIxNjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.g3mnLswYrrx9j4NrZ2G6QFDrL2O4FAJORZGY0zHxV3I" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4g965-198a3092-001d-4232-8d7b-7b2011cf2161.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Zzk2NS0xOThhMzA5Mi0wMDFkLTQyMzItOGQ3Yi03YjIwMTFjZjIxNjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.g3mnLswYrrx9j4NrZ2G6QFDrL2O4FAJORZGY0zHxV3I" alt="The First Dream" />
                            <div className="card-body">
                                <h5 className="card-title">The First Dream</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4g996-e367c0a1-5c7f-49c2-b78c-c80c60f52a0d.png/v1/fill/w_1024,h_4670,q_80,strp/tev_and_dren___on_the_road_to_andrano_tomb_by_hyperionwitch_df4g996-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDY3MCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Zzk5Ni1lMzY3YzBhMS01YzdmLTQ5YzItYjc4Yy1jODBjNjBmNTJhMGQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZWd7KvQPH-QK_QLHabAYtBUC5WYu8eGKU3TU_H2KGHU" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4g996-e367c0a1-5c7f-49c2-b78c-c80c60f52a0d.png/v1/fill/w_1024,h_4670,q_80,strp/tev_and_dren___on_the_road_to_andrano_tomb_by_hyperionwitch_df4g996-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDY3MCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Zzk5Ni1lMzY3YzBhMS01YzdmLTQ5YzItYjc4Yy1jODBjNjBmNTJhMGQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZWd7KvQPH-QK_QLHabAYtBUC5WYu8eGKU3TU_H2KGHU" alt="On the Road to Andrano Tomb" />
                            <div className="card-body">
                                <h5 className="card-title">On the Road to Andrano Tomb</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4g9c8-74956d83-0aee-4cc9-951f-1479a5bcc10c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZzljOC03NDk1NmQ4My0wYWVlLTRjYzktOTUxZi0xNDc5YTViY2MxMGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.STGLZFm2XgXitCUDSv_bHjAWZzA0xFlxS9UQqVpQow8" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4g9c8-74956d83-0aee-4cc9-951f-1479a5bcc10c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0ZzljOC03NDk1NmQ4My0wYWVlLTRjYzktOTUxZi0xNDc5YTViY2MxMGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.STGLZFm2XgXitCUDSv_bHjAWZzA0xFlxS9UQqVpQow8" alt="The Second Dream" />
                            <div className="card-body">
                                <h5 className="card-title">The Second Dream</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gbih-4a3a6445-b7d2-4698-9898-dae4fe4ea4fd.png/v1/fill/w_1024,h_4619,q_80,strp/tev_and_dren___nicknames_by_hyperionwitch_df4gbih-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDYxOSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2JpaC00YTNhNjQ0NS1iN2QyLTQ2OTgtOTg5OC1kYWU0ZmU0ZWE0ZmQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.D0FRBA1fLpeV3cnXJLtmAVr2zCNLF-_GlHrvdoBG1Gg" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gbih-4a3a6445-b7d2-4698-9898-dae4fe4ea4fd.png/v1/fill/w_1024,h_4619,q_80,strp/tev_and_dren___nicknames_by_hyperionwitch_df4gbih-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDYxOSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2JpaC00YTNhNjQ0NS1iN2QyLTQ2OTgtOTg5OC1kYWU0ZmU0ZWE0ZmQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.D0FRBA1fLpeV3cnXJLtmAVr2zCNLF-_GlHrvdoBG1Gg" alt="Nicknames" />
                            <div className="card-body">
                                <h5 className="card-title">Nicknames</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gbtt-7291b3b3-89ee-4bea-9419-1fc97902988c.png/v1/fill/w_1024,h_5459,q_80,strp/tev_and_dren___vivec_informant_wrap_up_by_hyperionwitch_df4gbtt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ1OSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2J0dC03MjkxYjNiMy04OWVlLTRiZWEtOTQxOS0xZmM5NzkwMjk4OGMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Vyy0AySn6apyjsp2DVAZaKSkvjJO4uORbPTxDD_hXUM" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gbtt-7291b3b3-89ee-4bea-9419-1fc97902988c.png/v1/fill/w_1024,h_5459,q_80,strp/tev_and_dren___vivec_informant_wrap_up_by_hyperionwitch_df4gbtt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ1OSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2J0dC03MjkxYjNiMy04OWVlLTRiZWEtOTQxOS0xZmM5NzkwMjk4OGMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Vyy0AySn6apyjsp2DVAZaKSkvjJO4uORbPTxDD_hXUM" alt="Vivec Informant Wrap Up" />
                            <div className="card-body">
                                <h5 className="card-title">Vivec Informant Wrap Up</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gbxi-a10a90d8-7c17-4c4a-a623-b757f370e04c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2J4aS1hMTBhOTBkOC03YzE3LTRjNGEtYTYyMy1iNzU3ZjM3MGUwNGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9gfc9ioGkY5NmcdzkHXUekLcLGMhHIvwbMuyPkWhBV8" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gbxi-a10a90d8-7c17-4c4a-a623-b757f370e04c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2J4aS1hMTBhOTBkOC03YzE3LTRjNGEtYTYyMy1iNzU3ZjM3MGUwNGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9gfc9ioGkY5NmcdzkHXUekLcLGMhHIvwbMuyPkWhBV8" alt="The Third Dream" />
                            <div className="card-body">
                                <h5 className="card-title">The Third Dream</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gc1j-1cf97450-32e7-4b58-9c57-65affb5d476b.png/v1/fill/w_1024,h_6702,q_80,strp/tev_and_dren___back_from_vivec__part_1_by_hyperionwitch_df4gc1j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjcwMiIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2Mxai0xY2Y5NzQ1MC0zMmU3LTRiNTgtOWM1Ny02NWFmZmI1ZDQ3NmIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5Z_lRUu0_hLS7RUv4vJ8TlDgYy8gtKmDkvEqgnlA3Ek" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gc1j-1cf97450-32e7-4b58-9c57-65affb5d476b.png/v1/fill/w_1024,h_6702,q_80,strp/tev_and_dren___back_from_vivec__part_1_by_hyperionwitch_df4gc1j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjcwMiIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2Mxai0xY2Y5NzQ1MC0zMmU3LTRiNTgtOWM1Ny02NWFmZmI1ZDQ3NmIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5Z_lRUu0_hLS7RUv4vJ8TlDgYy8gtKmDkvEqgnlA3Ek" alt="Back from Vivec, Part 1" />
                            <div className="card-body">
                                <h5 className="card-title">Back from Vivec, Part 1</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gc3h-2842b51b-163c-4456-8a0c-d883532322da.png/v1/fill/w_1024,h_8723,q_80,strp/tev_and_dren___back_from_vivec__part_2_by_hyperionwitch_df4gc3h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcyMyIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2MzaC0yODQyYjUxYi0xNjNjLTQ0NTYtOGEwYy1kODgzNTMyMzIyZGEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kFR0ZcoErnAuP9R9Xk3H-MUOfKhrWpiLaT67NTbSUxU" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gc3h-2842b51b-163c-4456-8a0c-d883532322da.png/v1/fill/w_1024,h_8723,q_80,strp/tev_and_dren___back_from_vivec__part_2_by_hyperionwitch_df4gc3h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcyMyIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2MzaC0yODQyYjUxYi0xNjNjLTQ0NTYtOGEwYy1kODgzNTMyMzIyZGEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kFR0ZcoErnAuP9R9Xk3H-MUOfKhrWpiLaT67NTbSUxU" alt="Back from Vivec, Part 2" />
                            <div className="card-body">
                                <h5 className="card-title">Back from Vivec, Part 2</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gj03-58defc88-3a82-4e18-8b96-44f3415d0f5c.png/v1/fill/w_1024,h_7955,q_80,strp/tev_and_dren___homeownership_by_hyperionwitch_df4gj03-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzk1NSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2owMy01OGRlZmM4OC0zYTgyLTRlMTgtOGI5Ni00NGYzNDE1ZDBmNWMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.TSIg5IcVwzL6kPZ1pv_zyrbR-za75jnQPw5A-_h2bqo" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gj03-58defc88-3a82-4e18-8b96-44f3415d0f5c.png/v1/fill/w_1024,h_7955,q_80,strp/tev_and_dren___homeownership_by_hyperionwitch_df4gj03-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzk1NSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2owMy01OGRlZmM4OC0zYTgyLTRlMTgtOGI5Ni00NGYzNDE1ZDBmNWMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.TSIg5IcVwzL6kPZ1pv_zyrbR-za75jnQPw5A-_h2bqo" alt="Homeownership" />
                            <div className="card-body">
                                <h5 className="card-title">Homeownership</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gj3w-8a6fdd35-a3a4-44b0-b3f7-67d7fe0bade2.png/v1/fill/w_1024,h_17096,q_80,strp/tev_and_dren___late_night_visit_by_hyperionwitch_df4gj3w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwOTYiLCJwYXRoIjoiXC9mXC9hOTI5NGY3Yi1hMDM2LTQyYWEtYTdhMi0zYzQ5YTBiMDQzNDJcL2RmNGdqM3ctOGE2ZmRkMzUtYTNhNC00NGIwLWIzZjctNjdkN2ZlMGJhZGUyLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3N9FrOfXyJ2cvICx4nu1fQhPYjrjtnWvReAqW2RIDLI" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gj3w-8a6fdd35-a3a4-44b0-b3f7-67d7fe0bade2.png/v1/fill/w_1024,h_17096,q_80,strp/tev_and_dren___late_night_visit_by_hyperionwitch_df4gj3w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwOTYiLCJwYXRoIjoiXC9mXC9hOTI5NGY3Yi1hMDM2LTQyYWEtYTdhMi0zYzQ5YTBiMDQzNDJcL2RmNGdqM3ctOGE2ZmRkMzUtYTNhNC00NGIwLWIzZjctNjdkN2ZlMGJhZGUyLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3N9FrOfXyJ2cvICx4nu1fQhPYjrjtnWvReAqW2RIDLI" alt="Late Night Visit" />
                            <div className="card-body">
                                <h5 className="card-title">Late Night Visit</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gj6w-cfc7032c-3752-4ed4-a1f3-bfe30003a4cd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2o2dy1jZmM3MDMyYy0zNzUyLTRlZDQtYTFmMy1iZmUzMDAwM2E0Y2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jiCLq-u7SnEMv349esMlZmUkSaVyC35pSo9kxHpr-3Q" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gj6w-cfc7032c-3752-4ed4-a1f3-bfe30003a4cd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2o2dy1jZmM3MDMyYy0zNzUyLTRlZDQtYTFmMy1iZmUzMDAwM2E0Y2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jiCLq-u7SnEMv349esMlZmUkSaVyC35pSo9kxHpr-3Q" alt="Sleepers Awake" />
                            <div className="card-body">
                                <h5 className="card-title">Sleepers Awake</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gjbg-874dda31-b16a-4edb-ab43-66f068606247.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2piZy04NzRkZGEzMS1iMTZhLTRlZGItYWI0My02NmYwNjg2MDYyNDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.623UYmZNpkEIvS2lfcQdl3W3ghFhmeh5JFi830ye5mU" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gjbg-874dda31-b16a-4edb-ab43-66f068606247.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2piZy04NzRkZGEzMS1iMTZhLTRlZGItYWI0My02NmYwNjg2MDYyNDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.623UYmZNpkEIvS2lfcQdl3W3ghFhmeh5JFi830ye5mU" alt="The Fourth Dream" />
                            <div className="card-body">
                                <h5 className="card-title">The Fourth Dream</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gjdf-620fbb70-0914-4dbd-a3b2-148bdbff9474.png/v1/fill/w_1024,h_10425,q_80,strp/tev_and_dren___nerevarine_news_by_hyperionwitch_df4gjdf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0MjUiLCJwYXRoIjoiXC9mXC9hOTI5NGY3Yi1hMDM2LTQyYWEtYTdhMi0zYzQ5YTBiMDQzNDJcL2RmNGdqZGYtNjIwZmJiNzAtMDkxNC00ZGJkLWEzYjItMTQ4YmRiZmY5NDc0LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.92XR7zpQvNetD06g5lcQHqdU0jIkJDd1p6eI0Pz8Adk" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gjdf-620fbb70-0914-4dbd-a3b2-148bdbff9474.png/v1/fill/w_1024,h_10425,q_80,strp/tev_and_dren___nerevarine_news_by_hyperionwitch_df4gjdf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0MjUiLCJwYXRoIjoiXC9mXC9hOTI5NGY3Yi1hMDM2LTQyYWEtYTdhMi0zYzQ5YTBiMDQzNDJcL2RmNGdqZGYtNjIwZmJiNzAtMDkxNC00ZGJkLWEzYjItMTQ4YmRiZmY5NDc0LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.92XR7zpQvNetD06g5lcQHqdU0jIkJDd1p6eI0Pz8Adk" alt="Nerevarine News" />
                            <div className="card-body">
                                <h5 className="card-title">Nerevarine News</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gjhn-cbce338f-2271-4a9a-b8ad-4751ab80a5b6.png/v1/fill/w_1024,h_4829,q_80,strp/tev_and_dren___apology_and_a_gift_by_hyperionwitch_df4gjhn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDgyOSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2pobi1jYmNlMzM4Zi0yMjcxLTRhOWEtYjhhZC00NzUxYWI4MGE1YjYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6RB2hDetU4X8CLvvr0nVxD4TxAjWK_RXe4IbDCdJIGg" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gjhn-cbce338f-2271-4a9a-b8ad-4751ab80a5b6.png/v1/fill/w_1024,h_4829,q_80,strp/tev_and_dren___apology_and_a_gift_by_hyperionwitch_df4gjhn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDgyOSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2pobi1jYmNlMzM4Zi0yMjcxLTRhOWEtYjhhZC00NzUxYWI4MGE1YjYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6RB2hDetU4X8CLvvr0nVxD4TxAjWK_RXe4IbDCdJIGg" alt="Apology and a Gift" />
                            <div className="card-body">
                                <h5 className="card-title">Apology and a Gift</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gl6r-94a4a093-14dd-43bf-b6b9-149f6c2a9367.png/v1/fill/w_1024,h_2574,q_80,strp/tev_and_dren___bonding_with_the_urshilaku_by_hyperionwitch_df4gl6r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU3NCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2w2ci05NGE0YTA5My0xNGRkLTQzYmYtYjZiOS0xNDlmNmMyYTkzNjcucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UQGMSrFCoaaLBJ0iZk_ftJ6qKRgTPN0jErII2r1tSPk" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gl6r-94a4a093-14dd-43bf-b6b9-149f6c2a9367.png/v1/fill/w_1024,h_2574,q_80,strp/tev_and_dren___bonding_with_the_urshilaku_by_hyperionwitch_df4gl6r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU3NCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2w2ci05NGE0YTA5My0xNGRkLTQzYmYtYjZiOS0xNDlmNmMyYTkzNjcucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UQGMSrFCoaaLBJ0iZk_ftJ6qKRgTPN0jErII2r1tSPk" alt="Bonding with the Urshilaku" />
                            <div className="card-body">
                                <h5 className="card-title">Bonding with the Urshilaku</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gl60-0ea7aeac-a2cc-420b-aa55-762db7d807f3.png/v1/fill/w_1024,h_5951,q_80,strp/tev_and_dren___first_wise_woman_wrap_up_by_hyperionwitch_df4gl60-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk1MSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2w2MC0wZWE3YWVhYy1hMmNjLTQyMGItYWE1NS03NjJkYjdkODA3ZjMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.P4Fk84SNJIgWD1LRlSSj8cwiuBL-rdBo6Z8R0L7l6WI" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gl60-0ea7aeac-a2cc-420b-aa55-762db7d807f3.png/v1/fill/w_1024,h_5951,q_80,strp/tev_and_dren___first_wise_woman_wrap_up_by_hyperionwitch_df4gl60-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk1MSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2w2MC0wZWE3YWVhYy1hMmNjLTQyMGItYWE1NS03NjJkYjdkODA3ZjMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.P4Fk84SNJIgWD1LRlSSj8cwiuBL-rdBo6Z8R0L7l6WI" alt="First Wise Woman Wrap Up" />
                            <div className="card-body">
                                <h5 className="card-title">First Wise Woman Wrap Up</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gl72-7aea48a6-3328-4789-8113-93dc1d3f3137.png/v1/fill/w_1024,h_6974,q_80,strp/tev_and_dren___heading_to_ilunibi_by_hyperionwitch_df4gl72-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njk3NCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2w3Mi03YWVhNDhhNi0zMzI4LTQ3ODktODExMy05M2RjMWQzZjMxMzcucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XdxBChdMwdIjrMouQz3-xtOZy-79UFVzMHMZ5_4hyCc" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gl72-7aea48a6-3328-4789-8113-93dc1d3f3137.png/v1/fill/w_1024,h_6974,q_80,strp/tev_and_dren___heading_to_ilunibi_by_hyperionwitch_df4gl72-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njk3NCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2w3Mi03YWVhNDhhNi0zMzI4LTQ3ODktODExMy05M2RjMWQzZjMxMzcucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XdxBChdMwdIjrMouQz3-xtOZy-79UFVzMHMZ5_4hyCc" alt="Heading to Ilunibi" />
                            <div className="card-body">
                                <h5 className="card-title">Heading to Ilunibi</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gl7o-a5298e6a-f8cf-4df1-9092-1287525e0d92.png/v1/fill/w_1024,h_10523,q_80,strp/tev_and_dren___ilunibi_by_hyperionwitch_df4gl7o-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MjMiLCJwYXRoIjoiXC9mXC9hOTI5NGY3Yi1hMDM2LTQyYWEtYTdhMi0zYzQ5YTBiMDQzNDJcL2RmNGdsN28tYTUyOThlNmEtZjhjZi00ZGYxLTkwOTItMTI4NzUyNWUwZDkyLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qWFrFcqPMjhOG4v9pa1iPayQbmAkhKxEBGtQzYL54LI" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gl7o-a5298e6a-f8cf-4df1-9092-1287525e0d92.png/v1/fill/w_1024,h_10523,q_80,strp/tev_and_dren___ilunibi_by_hyperionwitch_df4gl7o-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1MjMiLCJwYXRoIjoiXC9mXC9hOTI5NGY3Yi1hMDM2LTQyYWEtYTdhMi0zYzQ5YTBiMDQzNDJcL2RmNGdsN28tYTUyOThlNmEtZjhjZi00ZGYxLTkwOTItMTI4NzUyNWUwZDkyLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qWFrFcqPMjhOG4v9pa1iPayQbmAkhKxEBGtQzYL54LI" alt="ilunibi" />
                            <div className="card-body">
                                <h5 className="card-title">Ilunibi</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/dbo3j3e-e98e4faf-a45e-494a-a49a-e6c8892e03a5.jpg/v1/fill/w_1023,h_662,q_75,strp/of_his_flesh_by_hyperionwitch_dbo3j3e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjYyIiwicGF0aCI6IlwvZlwvYTkyOTRmN2ItYTAzNi00MmFhLWE3YTItM2M0OWEwYjA0MzQyXC9kYm8zajNlLWU5OGU0ZmFmLWE0NWUtNDk0YS1hNDlhLWU2Yzg4OTJlMDNhNS5qcGciLCJ3aWR0aCI6Ijw9MTAyMyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CWv66E-PBT-vi2CljznS2s-7aAHwo0nuUBdP8ilwIEg" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/dbo3j3e-e98e4faf-a45e-494a-a49a-e6c8892e03a5.jpg/v1/fill/w_1023,h_662,q_75,strp/of_his_flesh_by_hyperionwitch_dbo3j3e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjYyIiwicGF0aCI6IlwvZlwvYTkyOTRmN2ItYTAzNi00MmFhLWE3YTItM2M0OWEwYjA0MzQyXC9kYm8zajNlLWU5OGU0ZmFmLWE0NWUtNDk0YS1hNDlhLWU2Yzg4OTJlMDNhNS5qcGciLCJ3aWR0aCI6Ijw9MTAyMyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CWv66E-PBT-vi2CljznS2s-7aAHwo0nuUBdP8ilwIEg" alt="Battle with Dagoth Gares" />
                            <div className="card-body">
                                <h5 className="card-title">Battle with Dagoth Gares</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gl8c-e2973bfc-20e9-426a-bef5-9c8cda460383.png/v1/fill/w_1024,h_7944,q_80,strp/tev_and_dren___corprus_drama__part_1_by_hyperionwitch_df4gl8c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzk0NCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2w4Yy1lMjk3M2JmYy0yMGU5LTQyNmEtYmVmNS05YzhjZGE0NjAzODMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UntPLtmPmUp51tpIE30Yif4s_lzdKFJfj3EdBVm5OnA" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gl8c-e2973bfc-20e9-426a-bef5-9c8cda460383.png/v1/fill/w_1024,h_7944,q_80,strp/tev_and_dren___corprus_drama__part_1_by_hyperionwitch_df4gl8c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzk0NCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z2w4Yy1lMjk3M2JmYy0yMGU5LTQyNmEtYmVmNS05YzhjZGE0NjAzODMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UntPLtmPmUp51tpIE30Yif4s_lzdKFJfj3EdBVm5OnA" alt="Corprus Drama, Part 1" />
                            <div className="card-body">
                                <h5 className="card-title">Corprus Drama, Part 1</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gl8n-ce5c7a11-6c83-4ee8-bb2e-5fe94df07cb4.png/v1/fill/w_1024,h_11846,q_80,strp/tev_and_dren___corprus_drama__part_2_by_hyperionwitch_df4gl8n-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE4NDYiLCJwYXRoIjoiXC9mXC9hOTI5NGY3Yi1hMDM2LTQyYWEtYTdhMi0zYzQ5YTBiMDQzNDJcL2RmNGdsOG4tY2U1YzdhMTEtNmM4My00ZWU4LWJiMmUtNWZlOTRkZjA3Y2I0LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.adf0WFNM92Ebd4hm33ao_OUig6zyTWF_GXRXc9dGSxg" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gl8n-ce5c7a11-6c83-4ee8-bb2e-5fe94df07cb4.png/v1/fill/w_1024,h_11846,q_80,strp/tev_and_dren___corprus_drama__part_2_by_hyperionwitch_df4gl8n-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE4NDYiLCJwYXRoIjoiXC9mXC9hOTI5NGY3Yi1hMDM2LTQyYWEtYTdhMi0zYzQ5YTBiMDQzNDJcL2RmNGdsOG4tY2U1YzdhMTEtNmM4My00ZWU4LWJiMmUtNWZlOTRkZjA3Y2I0LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.adf0WFNM92Ebd4hm33ao_OUig6zyTWF_GXRXc9dGSxg" alt="Corprus Drama, Part 2" />
                            <div className="card-body">
                                <h5 className="card-title">Corprus Drama, Part 2</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4go81-f3629fda-0d22-40ef-9872-1ec90e120111.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z284MS1mMzYyOWZkYS0wZDIyLTQwZWYtOTg3Mi0xZWM5MGUxMjAxMTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VopF771BepAJHbgMLaM9-M-wjyc0bIvBo6YBy52LgWg" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4go81-f3629fda-0d22-40ef-9872-1ec90e120111.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z284MS1mMzYyOWZkYS0wZDIyLTQwZWYtOTg3Mi0xZWM5MGUxMjAxMTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VopF771BepAJHbgMLaM9-M-wjyc0bIvBo6YBy52LgWg" alt="Downtime in Balmora" />
                            <div className="card-body">
                                <h5 className="card-title">Downtime in Balmora</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4go8i-9d484e70-9ed2-497b-bd54-eac2c9e21096.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z284aS05ZDQ4NGU3MC05ZWQyLTQ5N2ItYmQ1NC1lYWMyYzllMjEwOTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mxzU-79fdN9YTKwqC3T0ORsGOZ-cSsz5Omh4KtnkKbE" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4go8i-9d484e70-9ed2-497b-bd54-eac2c9e21096.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z284aS05ZDQ4NGU3MC05ZWQyLTQ5N2ItYmQ1NC1lYWMyYzllMjEwOTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mxzU-79fdN9YTKwqC3T0ORsGOZ-cSsz5Omh4KtnkKbE" alt="Confession at Ghostgate" />
                            <div className="card-body">
                                <h5 className="card-title">Confession at Ghostgate</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4go8w-68f8d8f7-0707-4501-9e9a-cb06681a21fe.png/v1/fill/w_1024,h_3076,q_80,strp/tev_and_dren___a_hard_decision_by_hyperionwitch_df4go8w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzA3NiIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z284dy02OGY4ZDhmNy0wNzA3LTQ1MDEtOWU5YS1jYjA2NjgxYTIxZmUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.okHoSk764YwTs_md9pEfEYEDWCl95rANZQ0EXiSLm4I" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4go8w-68f8d8f7-0707-4501-9e9a-cb06681a21fe.png/v1/fill/w_1024,h_3076,q_80,strp/tev_and_dren___a_hard_decision_by_hyperionwitch_df4go8w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzA3NiIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z284dy02OGY4ZDhmNy0wNzA3LTQ1MDEtOWU5YS1jYjA2NjgxYTIxZmUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.okHoSk764YwTs_md9pEfEYEDWCl95rANZQ0EXiSLm4I" alt="A Hard Decision" />
                            <div className="card-body">
                                <h5 className="card-title">A Hard Decision</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4go9u-2113d3df-8622-4a97-a59e-3ecc7c70d85c.png/v1/fill/w_1024,h_12173,q_80,strp/tev_and_dren___battle_with_dagoth_ur__part_1_by_hyperionwitch_df4go9u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxNzMiLCJwYXRoIjoiXC9mXC9hOTI5NGY3Yi1hMDM2LTQyYWEtYTdhMi0zYzQ5YTBiMDQzNDJcL2RmNGdvOXUtMjExM2QzZGYtODYyMi00YTk3LWE1OWUtM2VjYzdjNzBkODVjLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.DStRm41_K-RRI2UkrvmLA2-RLOVYu3ZlgdvP7J3cInU" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4go9u-2113d3df-8622-4a97-a59e-3ecc7c70d85c.png/v1/fill/w_1024,h_12173,q_80,strp/tev_and_dren___battle_with_dagoth_ur__part_1_by_hyperionwitch_df4go9u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxNzMiLCJwYXRoIjoiXC9mXC9hOTI5NGY3Yi1hMDM2LTQyYWEtYTdhMi0zYzQ5YTBiMDQzNDJcL2RmNGdvOXUtMjExM2QzZGYtODYyMi00YTk3LWE1OWUtM2VjYzdjNzBkODVjLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.DStRm41_K-RRI2UkrvmLA2-RLOVYu3ZlgdvP7J3cInU" alt="Battle with Dagoth Ur, Part 1" />
                            <div className="card-body">
                                <h5 className="card-title">Battle with Dagoth Ur, Part 1</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4goac-bb1592c6-59c1-4a20-b08f-2a47bdf7c826.png/v1/fill/w_1024,h_11712,q_80,strp/tev_and_dren___battle_with_dagoth_ur__part_2_by_hyperionwitch_df4goac-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE3MTIiLCJwYXRoIjoiXC9mXC9hOTI5NGY3Yi1hMDM2LTQyYWEtYTdhMi0zYzQ5YTBiMDQzNDJcL2RmNGdvYWMtYmIxNTkyYzYtNTljMS00YTIwLWIwOGYtMmE0N2JkZjdjODI2LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.D_Xj6AeFKGDm_UBbqmK34_BGBKwTMfLoqD05a30FWAQ" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4goac-bb1592c6-59c1-4a20-b08f-2a47bdf7c826.png/v1/fill/w_1024,h_11712,q_80,strp/tev_and_dren___battle_with_dagoth_ur__part_2_by_hyperionwitch_df4goac-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE3MTIiLCJwYXRoIjoiXC9mXC9hOTI5NGY3Yi1hMDM2LTQyYWEtYTdhMi0zYzQ5YTBiMDQzNDJcL2RmNGdvYWMtYmIxNTkyYzYtNTljMS00YTIwLWIwOGYtMmE0N2JkZjdjODI2LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.D_Xj6AeFKGDm_UBbqmK34_BGBKwTMfLoqD05a30FWAQ" alt="Battle with Dagoth Ur, Part 2" />
                            <div className="card-body">
                                <h5 className="card-title">Battle with Dagoth Ur, Part 2</h5>
                            </div>
                        </div>
                    </a>
                    <a className="m-auto mb-3" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gob3-e1875ccf-bb6e-4210-9fdc-7bf9063d273c.png/v1/fill/w_1024,h_9369,q_80,strp/tev_and_dren___after_the_battle_by_hyperionwitch_df4gob3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTM2OSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z29iMy1lMTg3NWNjZi1iYjZlLTQyMTAtOWZkYy03YmY5MDYzZDI3M2MucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.z3aMw9y8pkGSVm3BCzfkR5u6N0OxoA57ny0zZR3neSc" target="_blank">
                        <div className="card comic-thumbnail">
                            <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/df4gob3-e1875ccf-bb6e-4210-9fdc-7bf9063d273c.png/v1/fill/w_1024,h_9369,q_80,strp/tev_and_dren___after_the_battle_by_hyperionwitch_df4gob3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTM2OSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGY0Z29iMy1lMTg3NWNjZi1iYjZlLTQyMTAtOWZkYy03YmY5MDYzZDI3M2MucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.z3aMw9y8pkGSVm3BCzfkR5u6N0OxoA57ny0zZR3neSc" alt="After the Battle" />
                            <div className="card-body">
                                <h5 className="card-title">After the Battle</h5>
                            </div>
                        </div>
                    </a>
                </div>

            </div>

            <br/>
            <br/>

            {/* Seasonal illustrations */}
            <h2>Monthly Illustrations</h2>
            {/* <div className="artimgrow">
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
            </div> */}

            <ul className="flexbox">
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevdrenmorningstar")}} id="modal-tevdrenmorningstar" src="https://64.media.tumblr.com/f7165f2cfdeb79f05393cb16e04f0aa2/tumblr_p3cz4yF0pR1r183xbo1_1280.png" alt="Tev, Dren, and Arvo on their balcony at sunset" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevdrensunsdawn")}} id="modal-tevdrensunsdawn" src="https://64.media.tumblr.com/04b1d3d640f277cdcee6d9cb6b172431/tumblr_p66gynZpXR1r183xbo1_1280.png" alt="Tev and Dren checking their map in the Ashlands while Arvo explores in the background" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevfirstseed")}} id="modal-tevdrenfirstseed" src="https://64.media.tumblr.com/009d3fa3055bf6e34043613d36155a61/tumblr_phc0x5myss1r183xbo1_1280.png" alt="Tev and Dren chatting at a table over a dinner of bread, keggs, rice, and stew while Arvo sleeps in the back" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevdrensunsheight")}} id="modal-tevdrensunsheight" src="https://64.media.tumblr.com/f9a752502e443f928a835f23dcd72f49/322d8cd3c7e16ae4-dd/s1280x1920/80e4cfb746dd5b3604fe8b26224ceb7e5479122b.png" alt="Tev and Dren standing in a grasslands field at sundown and looking out wistfully" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevdrenlastseed")}} id="modal-tevdrenlastseed" src="https://64.media.tumblr.com/506e601e5c4f98bc3eeb2e15703e2ee8/tumblr_plrdcxuC6W1r183xbo1_1280.png" alt="Tev and Dren standing in ankle-deep swamp water as they collect flowers" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevdrenhearthfire")}} id="modal-tevdrenhearthfire" src="https://64.media.tumblr.com/89d6ceec8443865b81f7310c45327c4b/54889ab44edc4228-ef/s1280x1920/61890661f65b39ae5f0e0a68a7981b7ece270d67.png" alt="Tev chuckling at Dren being over dramatic about Arvo standing on top of him in an Ashlander yurt" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevdrenfrostfall")}} id="modal-tevdrenfrostfall" src="https://64.media.tumblr.com/781656d8396ebd6be93d1d5efc1ccc29/5cfad9e7cca7bcc7-65/s1280x1920/2de6e295cb0fc8030d924500e4b1efaa56a53d34.png" alt="Tev and Dren at a campfire at dusk" />
                </li>
                <li></li>
            </ul>

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
            
            {/* <ul className="flexbox">
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-drenpinup")}} id="modal-drenpinup" src="https://64.media.tumblr.com/9183338a866b359eca9ae4523ce8b429/tumblr_ov2mqjme1S1r183xbo2_r1_1280.png" alt="Dren in his bedroom, shirtless and shaving" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevpinup")}} id="modal-tevpinup" src="https://64.media.tumblr.com/185e16f298a202c34cc49d14f72b8165/tumblr_ov2mqjme1S1r183xbo1_r1_1280.png" alt="Tev in her bedroom, reading while wearing a loose robe" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevhorrorscars")}} id="modal-tevhorrorscars" src="https://64.media.tumblr.com/468c68d951b695987e62687ce02ce848/8d63b33875a9dc83-4a/s1280x1920/c0ca8766a53f7fb11799a4696006a975b60f6b11.png" alt="Tev, drawn in light lines on black, with her scars in red" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-drenhorrorscars")}} id="modal-drenhorrorscars" src="https://64.media.tumblr.com/bdebe4879bb78eea709160772bf0cce3/8d63b33875a9dc83-83/s1280x1920/6ae5c8b9428e92e3a71bbc58167c13aa0b6decf4.png" alt="Dren, drawn in light lines on black, with his scars in red" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevantique")}} id="modal-tevantique" src="https://64.media.tumblr.com/9d0d9bb4a409c1eeffa4fe1ed9cd03aa/3e521c550e6d07c8-b6/s1280x1920/333a876fced4f8e99b7dea8dc9d9c9f5966510a8.png" alt="Tev painted in the style of an antique portrait" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-drenantique")}} id="modal-drenantique" src="https://64.media.tumblr.com/a52a30f44a314997493b0ce4ca39395d/3e521c550e6d07c8-ae/s1280x1920/e7522ad39ab2fd6659fdc9b50c60d8910a1371a5.png" alt="Dren painted in the style of an antique portrait" />
                </li>
                <li></li>
            </ul> */}

            <br/>
            <br/>
            
            {/* Miscellaneous illustrations */}
            <h2>Miscellaneous Illustrations</h2>
            <ul className="flexbox">
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevkintsukuroi")}} id="modal-tevkintsukuroi" src="https://64.media.tumblr.com/3c5c4bd1bd642eb2b6ff04aaa2a0e977/tumblr_o5v6zirzUp1r183xbo1_1280.png" alt="Tev in blue shades with her scars in gold" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevpainting")}} id="modal-tevpainting" src="https://64.media.tumblr.com/184f9649244664d6bc57e11d5f0db22e/tumblr_oce8peXZe51r183xbo1_1280.png" alt="Tev seated in front of a statue of Azura with her spear, surrounded by potions and candles" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevdrenholidays2016")}} id="modal-tevdrenholidays20176" src="https://64.media.tumblr.com/9510c9a901a5f1ab42d2eca546ef2983/tumblr_oixmgflHir1r183xbo1_r1_1280.png" alt="Tev and Dren sitting together and relaxing, Tev with a cup of tea and Dren with his lute" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevdrenrainy")}} id="modal-tevdrenrainy" src="https://64.media.tumblr.com/0a161ff1a4f8ff3cbec819cc4bfeec9a/tumblr_opxsq61iHC1r183xbo1_1280.png" alt="Tev and Dren laughing in an archway as they dry off from being caught in the rain" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevdrenholidays2017")}} id="modal-tevdrenholidays2017" src="https://64.media.tumblr.com/0d1f09fd923b3e7df53edc1cb4afc7ac/tumblr_p0rj7lk44f1r183xbo1_1280.png" alt="Tev and Dren seated on the floor with Arvo, Tev working on alchemy and Dren braiding flowers" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevdrenmusic")}} id="modal-tevdrenmusic" src="https://64.media.tumblr.com/704b51db56b144f8f1507e08e1d810b2/tumblr_pdsupotyNx1r183xbo1_1280.png" alt="Dren teaching Tev how to play lute while she sits in his lap" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevdrenscars")}} id="modal-tevdrenscars" src="https://64.media.tumblr.com/6627510e1c1280e3dd09280739a882d3/f39abef916302100-89/s1280x1920/988c1346cee81c4e50a8954d91135e4cf6d372a1.png" alt="Tev and Dren embracing and examining each others' scars" />
                </li>
                <li className="flex-container">
                    <img className="flex-image" onClick={()=>{modalOpenHandler("modal-tevdrenfield")}} id="modal-tevdrenfield" src="https://64.media.tumblr.com/553b70bf97d106f026d87c39df09f138/tumblr_o4o0xr1sW11r183xbo1_1280.png" alt="Symmetrical image of Tev and Dren lying in a field" />
                </li>
                <li></li>
            </ul>

            {/* <div className="artimgrow">
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
            </div> */}
        </div>
     );
}
 
export default Arttevdren;