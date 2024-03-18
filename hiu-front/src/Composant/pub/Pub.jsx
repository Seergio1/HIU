import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import './Pub.css'
function Pub() {
    return <>
        <div className='pub-container'>
            <div className='pub-left'>
                <img src={""} alt="" />
            </div>
            <div className='pub-right'>
                <div className='description'>
                    Découvrez "Les Couleurs de la Nature" : une expo virtuelle inoubliable !
                    Plongez dans un monde artistique vibrant depuis chez vous. Rencontrez des œuvres
                    époustouflantes et des artistes inspirants.
                    Rejoignez-nous maintenant !
                </div>
                <div className='bouton-container'>
                    <HiArrowNarrowRight className='arrow' />
                    <button className=''>Rejoignez nous</button>
                </div>
            </div>
        </div>
    </>
}

export default Pub