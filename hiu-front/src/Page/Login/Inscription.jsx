import React, { useEffect, useState } from 'react'
import './Inscription.css'
// import sar from "../../assets/img/ajout.png";
// import { upload } from '@testing-library/user-event/dist/upload'
function Inscription() {
    const [sary, setSary] = useState(""); 
    const uploade = (e) => {
        const img = e.target.files[0];
        console.log(img)
         setSary(URL.createObjectURL(img))
      };

    return <>
    <div className='insc'>
    <div className="bloc1">
        <div className='blo'>
        <div className="inputLabP" >
                    <input type="file" name="image" onChange={uploade} />
                </div>
                {
                    sary!==""&&(
                        <img src={sary} alt="" className='s' />
                    )
                }
        </div>
                
                <div className="inputLab">
                    <p>Nom</p>
                    <input type="text" name="" placeholder="ex : Rakoto"/>
                </div>
                <div className="inputLab">
                    <p>Prenom</p>
                    <input type="text" name="" placeholder="ex : Rasoa"/>
                </div>
            </div>
            <div className="inputLab">
                <p className='soratra'>Date de naissance</p>
                <input type="date" name=""/>
            </div>
            <div className="inputLab">
                <p className='soratra'>Nom d'artiste</p>
                <input type="text" name="" placeholder="ex : Babystar"/>
            </div>
            <div className="inputLab">
                <p className='soratra'>Email</p>
                <input type="email" name="" placeholder="example@email.com"/>
            </div>
            <div className="bttL">
                    S'inscrire
            </div>
    </div>
         

    </>
}

export default Inscription