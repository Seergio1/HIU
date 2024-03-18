import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import './DescriSection.css'
function DescriSection() {
    return <>
        <div className='descri-container'>
            <div className='texte-descriptif'>
                Explorez l'art et la culture en ligne : découvrez des œuvres, des performances et des expositions virtuelles uniques.
            </div>
            <div className='about-container'>
                <div className='about-texte'>Soyez curieux</div>
                <div className='bouton-container'>
                    <HiArrowNarrowRight className='arrow' />
                    <button className=''>Rejoignez nous</button>
                </div>
            </div>
        </div>
    </>
}

export default DescriSection