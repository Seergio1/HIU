import React, { useEffect, useState } from 'react'
import './Inscription.css'
import { useNavigate } from 'react-router-dom';
// import sar from "../../assets/img/ajout.png";
// import { upload } from '@testing-library/user-event/dist/upload'
function Inscription() {
    const nav = useNavigate();
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
                    <input type="text" name="nom" placeholder="ex : Rakoto"/>
                </div>
                <div className="inputLab">
                    <p>Prenom</p>
                    <input type="text" name="prenom" placeholder="ex : Rasoa"/>
                </div>
            </div>
            <div className="inputLab">
                <p className='soratra'>Date de naissance</p>
                <input type="date" name="dtn"/>
            </div>
            <div className="inputLab">
                <p className='soratra'>Nom d'artiste</p>
                <input type="text" name="nomartiste" placeholder="ex : Babystar"/>
            </div>
            <div className="inputLab">
                <p className='soratra'>Email</p>
                <input type="email" name="email" placeholder="example@email.com"/>
            </div>
            <div className="inputLab">
                <p className='soratra'>Mots de passe</p>
                <input type="password" name="mdp" placeholder="****"/>
            </div>
            <div className="bttL" onClick={async () => {
                var nom = document.getElementById("nom");
                var prenom = document.getElementById("prenom");
                var nomartiste = document.getElementById("nomartiste");
                var dtn = document.getElementById("dtn");
                var mdp = document.getElementById("mdp");
                var email = document.getElementById("email");
                const formData = new FormData();
                formData.append('nom',nom);
                formData.append('prenom',prenom);
                formData.append('nomartiste',nomartiste);
                formData.append('dtn',dtn);
                formData.append('email',email);
                formData.append('mdp',mdp);
                // console.log(auth);
                let url =
                  "https://buycarwebservice-production.up.railway.app/auth/authenticate";
                let response = await fetch(url, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: formData,
                });
                response = await response.json();
                console.log(response);
                console.log("Token :"+response.token);
                if (response.data.error === null) {
                  localStorage.setItem("Token", response.object.token);
                  nav("/Login");
                } else {
                    nav("/Login");
                }
              }} >
                    S'inscrire
            </div>
    </div>
         

    </>
}

export default Inscription