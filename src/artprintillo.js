import {useState} from "react";

const Artprintillo = () => {
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
                <h1>Print and Illustrations</h1>
                <p>Assorted print designs and miscellanous illustrations, both fanart and original</p>
            </div>

            { modalActive && <div onClick={()=>{modalCloseHandler()}} className="modal">
                <img className="modalcontent" id="modalimg" src={modalSource}/>
            </div>}

            <div className="artimgrow"> 
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-persona4")}} id="modal-persona4" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/der6xwi-c8c9fe73-c657-4d1d-9632-b4e59698333a.png/v1/fill/w_1024,h_1571,q_80,strp/reach_out_to_the_truth_by_hyperionwitch_der6xwi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU3MSIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGVyNnh3aS1jOGM5ZmU3My1jNjU3LTRkMWQtOTYzMi1iNGU1OTY5ODMzM2EucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4rFuM9leEPzv3yuD2dfBxiX4T0g_B-g8u_Ft0C6AeoQ" alt="Propaganda-style poster of the cast of Persona 4, labelled 'Reach Out to the Truth; Don't Be Afraid to Face Your True Self!'" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-ff7turks")}} id="modal-ff7turks" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/d806nbs-46d642ac-b98b-480f-a67c-f6e55d9b4c1b.png/v1/fill/w_1600,h_1036,q_80,strp/the_shinra_breakroom_by_hyperionwitch_d806nbs-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAzNiIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZDgwNm5icy00NmQ2NDJhYy1iOThiLTQ4MGYtYTY3Yy1mNmU1NWQ5YjRjMWIucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.J0y2FG9-dZon3Y0RMyH9eeKUnAexV-l-sTubfM2zLB4" alt="The Turks from Final Fantasy 7 playing cards in a breakroom" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-ff7cloudseph")}} id="modal-ff7cloudseph" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/d9jeta9-8bb31024-54fc-45fb-adc6-c6a98d9cc2ba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZDlqZXRhOS04YmIzMTAyNC01NGZjLTQ1ZmItYWRjNi1jNmE5OGQ5Y2MyYmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qPbzJRFyfNk61JfFQefHalOeYsIdeiA_NVmYMj6Clbk" alt="Stylized Cloud Strife and Sephiroth" className="artimg" />
                </div>
            
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-darksouls")}} id="modal-darksouls" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/der13bx-2303bdab-ddff-47c0-95c4-b14567e9194c.png/v1/fill/w_1024,h_1570,q_80,strp/lord_s_soul_by_hyperionwitch_der13bx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU3MCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGVyMTNieC0yMzAzYmRhYi1kZGZmLTQ3YzAtOTVjNC1iMTQ1NjdlOTE5NGMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.X27FTyPdWCmEePfdcv_ZhT6Tvkt36d56-F4iG6gd1II" alt="The Four Lords of Dark Souls in a religious art style" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-daisolavellan")}} id="modal-daisolavellan" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/dagntsj-57b1efe1-952c-4c95-9f15-369dd381060f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGFnbnRzai01N2IxZWZlMS05NTJjLTRjOTUtOWYxNS0zNjlkZDM4MTA2MGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hSue59SlmojIosxeC_R-fcCnTq3VuzYK5AgJkbUFrk8" alt="A painting of Solas and the Inquisitor from Dragon Age: Inquisition" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-susailorquartz")}} id="modal-susailorquartz" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/d9hpvyx-b9e49acb-be7f-4af1-b1dc-670f011ff60f.png/v1/fill/w_1600,h_1044,q_80,strp/sailor_quartz_by_hyperionwitch_d9hpvyx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0NCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZDlocHZ5eC1iOWU0OWFjYi1iZTdmLTRhZjEtYjFkYy02NzBmMDExZmY2MGYucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5Qfdq19QteROxl9LyZrsfWRvNO82pE5lTwso3kdheVQ" alt="Steven Universe and Connie making a costume with Garnet" className="artimg" />
                </div> 
            
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-korrasami")}} id="modal-korrasami" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/d9gdkm5-3d7726eb-6f5e-4846-abe0-34e99701945a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZDlnZGttNS0zZDc3MjZlYi02ZjVlLTQ4NDYtYWJlMC0zNGU5OTcwMTk0NWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.67X1zkrZdVXiEjnocBioq_er4-DphHectNcn6KKOXZY" alt="Art nouveau poster of Korra and Asami embracing" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-xenosaga")}} id="modal-xenosaga" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/dbo3joe-997e6400-70f2-4bc0-9c5c-3175159c1e56.png/v1/fill/w_1600,h_1036,q_80,strp/n_a_t_a_r_a_j_a_by_hyperionwitch_dbo3joe-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAzNiIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGJvM2pvZS05OTdlNjQwMC03MGYyLTRiYzAtOWM1Yy0zMTc1MTU5YzFlNTYucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hcq_LotrN-hdvwTTRHwpWBdMzQoTC6rhk_DynkYtOwg" alt="KOS-MOS from Xenosaga displaying a phantom arsenal of weapons, labelled 'NATARAJA'" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-rwby")}} id="modal-rwby" src="https://64.media.tumblr.com/59d38f78808bb4e345f1d910e38318a0/tumblr_ollurm0VSU1r183xbo1_1280.png" alt="Yang Xiao Long and Blake Belladonna lying in a field and wearing dresses" className="artimg" />
                </div>
                    
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-witcher")}} id="modal-witcher" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/ddutwvf-ec2ce8c4-d543-4e34-8b10-2910e3e95f1d.png/v1/fill/w_1024,h_1571,q_80,strp/toss_a_coin_by_hyperionwitch_ddutwvf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGR1dHd2Zi1lYzJjZThjNC1kNTQzLTRlMzQtOGIxMC0yOTEwZTNlOTVmMWQucG5nIiwiaGVpZ2h0IjoiPD0xNTcxIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvYTkyOTRmN2ItYTAzNi00MmFhLWE3YTItM2M0OWEwYjA0MzQyXC9oeXBlcmlvbndpdGNoLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.JM9Empi3WG4fCE9EP1l5QFcRozkgLke2dwofQLTAT6s" alt="Art nouveau musician poster of Jaskier from the Witcher show, advertising the song 'Toss a Coin to Your Witcher'" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-ff10yuna")}} id="modal-ff10yuna" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/d7vr95n-455564bd-9080-4f81-8466-5bdaf33a1103.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZDd2cjk1bi00NTU1NjRiZC05MDgwLTRmODEtODQ2Ni01YmRhZjMzYTExMDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DuZQki1CmMmqQMcgoCTSVuFsXZdcRDy5WhqGi7hZhnc" alt="Yuna from Final Fantasy 10 surrounded by her Aeons" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-pfmops")}} id="modal-pfmops" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/dbo3k6u-8793e2d2-8df1-4289-8b84-7b821e34630f.png/v1/fill/w_1600,h_1044,q_80,strp/mimosas_on_ponyback_by_hyperionwitch_dbo3k6u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0NCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGJvM2s2dS04NzkzZTJkMi04ZGYxLTQyODktOGI4NC03YjgyMWUzNDYzMGYucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.F4fqsii1mwrHXWLk5tFftx16D0L10DwcwjYEorEoeSs" alt="Five fantasy characters dressed in fashionable clothing and lounging, labelled 'Mimosas on Ponyback'" className="artimg" />
                </div>
            </div>

            <br/>
            <br/>

            <div className="artimgrow">
                <div className="artimgcolumn3">
                    <img onClick={()=>{modalOpenHandler("modal-ootmm")}} id="modal-ootmm" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/d7koxil-4d34b640-0ed2-48aa-a409-c14f038a7722.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZDdrb3hpbC00ZDM0YjY0MC0wZWQyLTQ4YWEtYTQwOS1jMTRmMDM4YTc3MjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vwvs9DcOKFYGO3C5B-0uaBfiBITQbOcc6nVf1zzfuMU" alt="Symmetrical art nouveau poster of Link from both The Legend of Zelda: Majora's Mask and Ocarina of Time" className="artimgflip" />
                </div>

                <div className="artimgcolumn4">
                    <img onClick={()=>{modalOpenHandler("modal-silenthill2")}} id="modal-silenthill2" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/der13f1-6c3da4ec-4d57-48c6-af0e-eb9c49ff15e2.png/v1/fill/w_1600,h_1044,q_80,strp/restless_dreams_by_hyperionwitch_der13f1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0NCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZGVyMTNmMS02YzNkYTRlYy00ZDU3LTQ4YzYtYWYwZS1lYjljNDlmZjE1ZTIucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LfzJyMFKVKWNWG6i8Wb1TbQqvTaO21fJP0HuVLPz1KY" alt="Symmetrical art nouveau-ish poster of James from Silent Hill 2 with Maria on one side and Mary on the other" className="artimgflip" />
                </div>
            </div>

            <br/>
            <br/>

            <div className="artimgrow"> 
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-sugarnet")}} id="modal-sugarnet" src="https://64.media.tumblr.com/809580febce44fb2344f6d65914a3639/tumblr_pq6otpk8Vv1r183xbo1_1280.png" alt="Art nouveau poster of Garnet from Steven Universe" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-sustevonnie")}} id="modal-sustevonnie" src="https://64.media.tumblr.com/7a0e0f097878813117358aa9539d07e1/tumblr_pq6otpk8Vv1r183xbo2_1280.png" alt="Art nouveau poster of Stevonnie from Steven Universe" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-sualexandrite")}} id="modal-sualexandrite" src="https://64.media.tumblr.com/0268adf384e8be8dc60d282d523d87b0/tumblr_pq6otpk8Vv1r183xbo3_1280.png" alt="Art nouveau poster of Alexandrite from Steven Universe" className="artimg" />
                </div>
            
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-suopal")}} id="modal-suopal" src="https://64.media.tumblr.com/c9017b21b1a06d0049d80d8ff260b5f5/tumblr_oc8vdmt0TL1r183xbo3_1280.png" alt="Art nouveau poster of Opal from Steven Universe" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-susmokeyquartz")}} id="modal-susmokeyquartz" src="https://64.media.tumblr.com/149218b4beddde3ef9eac1ee4f073464/tumblr_pq6otpk8Vv1r183xbo7_1280.png" alt="Art nouveau poster of Smokey Quartz from Steven Universe" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-suobsidian")}} id="modal-suobsidian" src="https://64.media.tumblr.com/691954e22a2045d23b863d9cb2cf46f7/tumblr_pq6otpk8Vv1r183xbo8_1280.png" alt="Art nouveau poster of Obsidian from Steven Universe" className="artimg" />
                </div> 
            
                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-susugilite")}} id="modal-susugilite" src="https://64.media.tumblr.com/44175afd4cc5a774e0ad4e67ae60f86c/tumblr_oc8vdmt0TL1r183xbo2_1280.png" alt="Art nouveau poster of Sugilite from Steven Universe" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-susunstone")}} id="modal-susunstone" src="https://64.media.tumblr.com/746239c3f306e059e0be8297b1c059c7/tumblr_pq6otpk8Vv1r183xbo6_1280.png" alt="Art nouveau poster of Sunstone from Steven Universe" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-sumalachite")}} id="modal-sumalachite" src="https://64.media.tumblr.com/9d1763b36ed693b3d0bd1e51273d385b/tumblr_pq6otpk8Vv1r183xbo5_1280.png" alt="Art nouveau poster of Malachite from Steven Universe" className="artimg" />
                </div>

                <div className="artimgcolumn">
                    <img onClick={()=>{modalOpenHandler("modal-susardonyx")}} id="modal-susardonyx" src="https://64.media.tumblr.com/04a8dfd2daf68ab638520b5ac539badb/tumblr_oc8vdmt0TL1r183xbo1_1280.png" alt="Art nouveau poster of Sardonyx from Steven Universe" className="artimg" />
                    <img onClick={()=>{modalOpenHandler("modal-surainbowquartz")}} id="modal-surainbowquartz" src="https://64.media.tumblr.com/7022e1d4d7d90e61df3b095d097e4e14/tumblr_pq6otpk8Vv1r183xbo4_1280.png" alt="Art nouveau poster of Rainbow Quartz from Steven Universe" className="artimg" />
                </div>
            </div>

            <br/>
            <br/>

            <div className="artimgrow"> 
                <div className="artimgcolumn2">
                    <img onClick={()=>{modalOpenHandler("modal-utmercy")}} id="modal-utmercy" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/d9uk86m-715b8d55-6992-4107-9591-3fa32b6a40d5.png/v1/fill/w_1600,h_1044,q_80,strp/filled_with_determination_by_hyperionwitch_d9uk86m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0NCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZDl1azg2bS03MTViOGQ1NS02OTkyLTQxMDctOTU5MS0zZmEzMmI2YTQwZDUucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.oAkyiFwSt2LCjA4F0IuSbnrRab14EstzGB7pAY_6bdM" alt="Frisk from Undertale facing a field of yellow flowers with a banner depicting the bosses from the Mercy run of the game" className="artimg" />
                </div>
            
                <div className="artimgcolumn2">
                    <img onClick={()=>{modalOpenHandler("modal-utnomercy")}} id="modal-utnomercy" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/d9upgka-324c909c-019f-4afa-b02c-896d2c586b14.png/v1/fill/w_1600,h_1044,q_80,strp/crawling_on_your_back_by_hyperionwitch_d9upgka-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0NCIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZDl1cGdrYS0zMjRjOTA5Yy0wMTlmLTRhZmEtYjAyYy04OTZkMmM1ODZiMTQucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.q8c0c0Cn1Yfga49SHGZHAEK-iFfeLWcMcKpGzKdJwlA" alt="Chara from Undertale facing a field of yellow flowers with a banner depicting the bosses from the No Mercy run of the game" className="artimg" />
                </div> 
            </div>

            <br/>
            <br/>

            <div className="artimgrow"> 
                <div className="artimgcolumn2">
                    <img onClick={()=>{modalOpenHandler("modal-sminners")}} id="modal-sminners" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/d7lcbqy-c86f2125-0922-441c-aefa-a0f3296e52c3.png/v1/fill/w_1600,h_1036,q_80,strp/the_inner_scouts_by_hyperionwitch_d7lcbqy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAzNiIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZDdsY2JxeS1jODZmMjEyNS0wOTIyLTQ0MWMtYWVmYS1hMGYzMjk2ZTUyYzMucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.o6uCubV2N94kfTS92DkyAw15t0RoEWL2JC_fw8lInic" alt="A set of three columns, featuring Sailor Venus and Sailor Mars, Tuxedo Mask and Sailor Moon, and Sailor Mercury and Sailor Jupiter" className="artimg" />
                </div>
            
                <div className="artimgcolumn2">
                    <img onClick={()=>{modalOpenHandler("modal-smouters")}} id="modal-smouters" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9294f7b-a036-42aa-a7a2-3c49a0b04342/d7lmlwd-d7e800b9-7267-4197-a847-a2496f5d2c57.png/v1/fill/w_1600,h_1036,q_80,strp/the_outer_scouts_by_hyperionwitch_d7lmlwd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAzNiIsInBhdGgiOiJcL2ZcL2E5Mjk0ZjdiLWEwMzYtNDJhYS1hN2EyLTNjNDlhMGIwNDM0MlwvZDdsbWx3ZC1kN2U4MDBiOS03MjY3LTQxOTctYTg0Ny1hMjQ5NmY1ZDJjNTcucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.D2AKg-5Iq9CpLNWyq3Sk4jJk4vWJFzRz_yAugPjhbxc" alt="A set of three columns, featuring Sailor Pluto and Sailor Saturn, Sailor Chibi Moon and the three cats, and Sailor Uranus and Sailor Neptune" className="artimg" />
                </div> 
            </div>
        </div>
     );
}
 
export default Artprintillo;