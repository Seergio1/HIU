import React from 'react'
import './Footer.css'
import { SiFacebook, SiInstagram } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
function Footer() {
    return <>
        <div className='footer-container'>
            <div className='header-footer'>
                <div className='left-content'>
                    <div className='logo'>ART-MESIA</div>
                    <div className='mot'>ART</div>
                    <div className='mot'>EXPOSITION</div>
                    <div className='mot'>VIRTUEL</div>
                </div>
                <div className='right-content'>
                    ART - MESIA est une plateforme d'art et d'exposition en ligne, offrant une expérience immersive et interactive à travers des expositions virtuelles, des galeries d'artistes et une boutique en ligne, mettant en lumière les talents
                    émergents et établis de la scène artistique contemporaine.
                </div>
            </div>
            <div className='content-footer'>
                <div className='reseau'>
                    <div className='reseau-item'><SiFacebook /></div>
                    <div className='reseau-item'><SiInstagram /></div>
                    <div className='reseau-item'><RiTwitterXLine /></div>
                </div>
                <div className='copyright'>2024 Art-mesia art, exposition, virtuel</div>
            </div>
        </div>

    </>
}

export default Footer