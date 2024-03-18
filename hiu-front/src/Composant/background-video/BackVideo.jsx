import React from 'react'
import './BackVideo.css'
import videoBg from './../../assets/video/564940_Art Gallery Exhibition Woman_By_AnnaStills_Artlist_HD.mp4'
function BackVideo() {
    return <>
        <div className='backvideo-container'>
            <video src={videoBg} autoPlay loop muted />
        </div>

    </>
}

export default BackVideo