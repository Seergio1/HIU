import React, { useRef } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PhotoIA.css'
// import '@google/model-viewer' 
// import 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js'
import sary from "../../assets/img/35907868-galerie-facile-icone-vecteur-illustration-sur-blanc-contexte-conception-vectoriel.jpg"
import saryy from "../../assets/img/saryy.jpg"
// import statue from "../../assets/statue/vysehrad_-_statue_of_ctirad_and_sarka.glb"
// import { Canvas } from '@react-three/fiber';
// import { Box, OrbitControls, useGLTF } from '@react-three/drei';
function PhotoIA({statue}) {
  // const modelRef = useRef();
  // const { nodes, materials } = useGLTF(statue);
    function scrollToElement(elementId) {
        const targetElement = document.getElementById(elementId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    return <>
   
        <div className="allCont">

<div className="gauchecont" id="la">
  <h1>Découvrez l'IA Visionnaire : Un Regard Artistique Automatisé</h1>
  <h2>
    Vous cherchez à donner vie à vos photos de manière unique et
    inspirante ?
  </h2>
  <p>Entrez dans le monde de l'art automatisé dès aujourd'hui.</p>

  <div className="allkely">
      <div className="ajp">
          <img src={sary} alt=""/>

          <input type="file" name="" id="" />
        </div>
        <div className="but"><span>Magie</span></div>
  </div>
  
</div>
<div className="droitecont">
  <h2 onClick={() => scrollToElement('la')}>DECOUVREZ </h2>
  <model-viewer 
          src="elven_ranger_statue.glb" 
          ar camera-controls 
          shadow-intensity="1" 
          touch-action="pan-y">   
        </model-viewer>
  {/* <img src={saryy} alt="" /> */}
  {/* <model-viewer src="../../assets/statue/vysehrad_-_statue_of_ctirad_and_sarka.glb" shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer> */}
</div>

</div>
<div className="resultat">

  <div className="resg">
      <img src="" alt=""/>
  </div>
  <div className="resd">
      <p>kndlk</p>
  </div>

</div>
    </>
}

export default PhotoIA