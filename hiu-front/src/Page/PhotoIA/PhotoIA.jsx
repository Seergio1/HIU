import React, { useRef, useState } from 'react'
import './PhotoIA.css'
import sary from "../../assets/img/35907868-galerie-facile-icone-vecteur-illustration-sur-blanc-contexte-conception-vectoriel.jpg"
import saryy from "../../assets/img/saryy.jpg"
import axios from 'axios'


function PhotoIA({ statue }) {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

  const get_description = async function () {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://192.168.2.92:5000/api/v1/describing-image?image=' + image
    }
    await axios.request(config)
      .then((response) => {
        setDescription(response.data.response)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
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
            <img src={sary} alt="" />
            <input type="file" name="" id="" onChange={handleImageChange} />
          </div>
          <div className="but" onClick={() => {
            get_description()
            console.log(image);
          }}><span>Magie</span></div>
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
      </div>

    </div>

    <div className="resultat">

      <div className="resg">
        {image && <img src={image} alt="" />}
      </div>
      <div className="resd">
        <p>Déscription</p>
        <div className='resultat-description'>
          {description != null && (
            { description }
          )}
        </div>
      </div>

    </div>
  </>
}

export default PhotoIA