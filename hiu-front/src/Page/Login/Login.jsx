import React, { useState } from "react";
import "./Login.css";
// import logSary from '../../assets/img/logPhoto.jpg';
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Inscription from "./Inscription";
function Login() {
  // const [blop,setBlop] = useState(0);
  // function change(){

  // }
  const nav = useNavigate();
  const [position, setPosition] = useState(1);

  const swapDivs = () => {
    setPosition(position === 1 ? 2 : 1);
  };
  return (
    <>
      <div className="bigcontainer">
        <div className="container">
          <div className="gauche" style={{ order: position === 1 ? 1 : 2 }}>
            <motion.h1 animate={{ fontSize: 10, color: "#fff" }}>
              Art de Retour
            </motion.h1>
          </div>

          <div className="droite" style={{ order: position === 2 ? 1 : 2 }}>
            {position === 1 && (
              <>
                <h2>Connectez-vous à votre compte.</h2>
                <div className="inputLog">
                  <p>Email</p>
                  <input type="email" id="email" />
                </div>
                <div className="inputLog">
                  <p>Mots de passe</p>
                  <input type="text" id="password"/>
                </div>
                <div className="forgot">
                  <span onClick={swapDivs}>Inscription</span>
                  <span>
                    <NavLink to={"#"} className="lien">
                      Forgot Password?
                    </NavLink>
                  </span>
                </div>
                <div className="bttL" onClick={async () => {
                var email = document.getElementById("email");
                var password = document.getElementById("password");
                const formData = new FormData();
                formData.append('email',email);
                formData.append('mdp',password);
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
                  nav("/");
                } else {
                    nav("/Login");
                }
              }} >Connexion</div>
              </>
            )}
            {position === 2 && (
              <>
                {/* <h3>Rejoignez-nous dès maintenant et faites briller vos créations ! </h3> */}
                <Inscription></Inscription>
                <div className="bttLl" onClick={swapDivs}>
                  S'identifier
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
