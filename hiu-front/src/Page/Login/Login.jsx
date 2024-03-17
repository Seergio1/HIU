import React, { useState } from "react";
import "./Login.css";
// import logSary from '../../assets/img/logPhoto.jpg';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Inscription from "./Inscription";
function Login1() {
  // const [blop,setBlop] = useState(0);
  // function change(){

  // }
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
                  <input type="email" />
                </div>
                <div className="inputLog">
                  <p>Mots de passe</p>
                  <input type="text" />
                </div>
                <div className="forgot">
                  <span onClick={swapDivs}>Inscription</span>
                  <span>
                    <NavLink to={"#"} className="lien">
                      Forgot Password?
                    </NavLink>
                  </span>
                </div>
                <div className="bttL">Connexion</div>
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

export default Login1;
