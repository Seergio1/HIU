import React, { useState } from "react";
import "./Login.css";
// import logSary from '../../assets/img/logPhoto.jpg';
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Inscription from "./Inscription";
import axios from 'axios';
function Login() {
  const [error, setError] = useState(null);
  // const [blop,setBlop] = useState(0);
  // function change(){

  // }
  const nav = useNavigate();
  const [position, setPosition] = useState(1);
  const [formData, setFormData] = useState(new FormData());
  const [loading, setLoading] = useState(false);

  const swapDivs = () => {
    setPosition(position === 1 ? 2 : 1);
  };

  const login = async () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    formData.append('email', email);
    formData.append('mdp', password);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/v1/auth/login',
      data: formData
    };
    await axios.request(config)
      .then((response) => {
        setFormData(new FormData());
        if (response.data.error != null) {
          setError(response.data.error);
        }
        console.log(JSON.stringify(response.data));
        setLoading(false);
        if (response.data.error === null) {
          localStorage.setItem("Token", response.data.data[1].token);
          nav("/");
        } else {
          nav("/Login");
        }
      })
  }
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
                  <input type="text" id="password" />
                </div>
                <div className="forgot">
                  <span onClick={swapDivs}>Inscription</span>
                  <span>
                    <NavLink to={"#"} className="lien">
                      Forgot Password?
                    </NavLink>
                  </span>
                </div>
                <div className="bttL" onClick={login} >Connexion</div>
              </>
            )}
            {position === 2 && (
              <>
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
