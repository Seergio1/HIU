import React, { useRef, useState } from 'react'
import './GalleryCarousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import oeuvre from './../../assets/img/oeuvre.webp'
import { Fade } from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';
import oiseau from './../../assets/img/oiseau.jpg'
import { HiOutlineSearch } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import Modal from './../jsx/Modal';
import Oeuvre_form from './../jsx/Oeuvre_form'
import Exposition_form from './../jsx/Exposition_form'

export function GalleryCarousel() {
    return <>
        <div className='gallery-container'>
            <div className='title'>Exposition courante</div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='item'>
                        <div className='img'>
                            <img src={oeuvre} alt="" />
                        </div>
                        <div className='gallery-info'>
                            <div className='titre'>Surrealist</div>
                            <div className='artiste-name'>Lee Miller</div>
                            <div className='dates'>4 November 2023-14 April 2024</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item'>
                        <div className='img'>
                            <img src={oeuvre} alt="" />
                        </div>
                        <div className='gallery-info'>
                            <div className='titre'>Surrealist</div>
                            <div className='artiste-name'>Lee Miller</div>
                            <div className='dates'>4 November 2023-14 April 2024</div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    </>
}

export function GalleryScroll() {
    const images = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5", "Image 6", "Image 7", "Image 8", "Image 9", "Image 10"];
    const navigate = useNavigate();
    const [closeModal, setCloseModal] = useState(false)
    const handleClose = () => {

        setCloseModal(!closeModal)
        console.log(closeModal);
    }
    return <>
        {closeModal ? <Modal closer={handleClose}>{<Exposition_form />}</Modal > : ""}
        <div className='gallery-scroll-container'>

            <div className='header-search'>
                <div className='title'>Exposition</div>
                <div className='search-container'>
                    <input type="text" placeholder='Exposition,évènement,...' />
                    <HiOutlineSearch />
                </div>
            </div>
            <div className="gallery">

                {images.map((image, index) => (
                    <div key={index} className={`gallery-item ${index % 4 === 3 ? 'full-row' : ''}`} onClick={() => {
                        navigate('/Oeuvre')
                        localStorage.setItem('displayOeuvre', 'notAll')
                    }}>
                        <Fade cascade damping={0.1} direction='top'>
                            <div className={`item ${index % 4 !== 3 ? 'not-full-row' : ''}`} >
                                <div className='img'>
                                    <img src={oeuvre} alt="" />
                                </div>
                                <div className='gallery-info'>
                                    <div className='titre'>Surrealist</div>
                                    <div className='artiste-name'>Lee Miller</div>
                                    <div className='dates'>4 November 2023-14 April 2024</div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                ))}

            </div>

        </div>
        <div className='add' onClick={() => { handleClose() }}>
            <HiPlus />
        </div>

    </>


}

export function GalleryOeuvre() {
    const [closeModal, setCloseModal] = useState(false)
    const handleClose = () => {

        setCloseModal(!closeModal)
        console.log(closeModal);
    }
    return <>
        {closeModal ? <Modal closer={handleClose}>{<Oeuvre_form />}</Modal > : ""}
        <div className='box-gallery-oeuvre'>
            <div className='header-search'>
                <div className='title'>Surrealiste (16)</div>
                <div className='search-container'>
                    <input type="text" placeholder='Exposition,évènement,...' />
                    <HiOutlineSearch />
                </div>
            </div>
            <div className='gallery-oeuvre-container'>
                <div className='gallery-oeuvre-item'>

                    <img src={oiseau} alt="" />
                    <div className='descri-oeuvre-container'>
                        {/* <div className='taille'>700 x 800</div> */}
                        <div className='nomOeuvre'>Brushstroke</div>
                        <div className='artiste'>by Jarred Clark</div>
                    </div>
                    <div className='header-container'>
                        <div className='themes'>Renaissance</div>
                    </div>
                </div>

                <div className='gallery-oeuvre-item'>

                    <img src={oiseau} alt="" />
                    <div className='descri-oeuvre-container'>
                        {/* <div className='taille'>700 x 800</div> */}
                        <div className='nomOeuvre'>Brushstroke</div>
                        <div className='artiste'>by Jarred Clark</div>
                    </div>
                    <div className='header-container'>
                        <div className='themes'>Renaissance</div>
                    </div>
                </div>

                <div className='gallery-oeuvre-item'>

                    <img src={oiseau} alt="" />
                    <div className='descri-oeuvre-container'>
                        {/* <div className='taille'>700 x 800</div> */}
                        <div className='nomOeuvre'>Brushstroke</div>
                        <div className='artiste'>by Jarred Clark</div>
                    </div>
                    <div className='header-container'>
                        <div className='themes'>Renaissance</div>
                    </div>
                </div>

                <div className='gallery-oeuvre-item'>

                    <img src={oiseau} alt="" />
                    <div className='descri-oeuvre-container'>
                        {/* <div className='taille'>700 x 800</div> */}
                        <div className='nomOeuvre'>Brushstroke</div>
                        <div className='artiste'>by Jarred Clark</div>
                    </div>
                    <div className='header-container'>
                        <div className='themes'>Renaissance</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='add' onClick={() => { handleClose() }}>
            <HiPlus />
        </div>
    </>
}

export function GalleryEvent() {
    return <>
        <div class="wrapper">
            <div className='header-search'>
                <div className='title'>Evènement</div>
                <div className='search-container'>
                    <input type="text" placeholder='Exposition,évènement,...' />
                    <HiOutlineSearch />
                </div>
            </div>
            <div class="content-area">

                <div class="single-content">
                    <img src={oeuvre} alt="" />
                    <div class="info">
                        <h2>The fallen angel</h2>
                        <p>14 Novembre 2024</p>
                    </div>
                </div>

                <div class="single-content">
                    <img src={oeuvre} alt="" />
                    <div class="info">
                        <h2>The fallen angel</h2>
                        <p>14 Novembre 2024</p>
                    </div>
                </div>
                <div class="single-content">
                    <img src={oeuvre} alt="" />
                    <div class="info">
                        <h2>The fallen angel</h2>
                        <p>14 Novembre 2024</p>
                    </div>
                </div>
                <div class="single-content">
                    <img src={oeuvre} alt="" />
                    <div class="info">
                        <h2>The fallen angel</h2>
                        <p>14 Novembre 2024</p>
                    </div>
                </div>

                <div class="single-content">
                    <img src={oeuvre} alt="" />
                    <div class="info">
                        <h2>Product One</h2>
                        <p>14 Novembre 2024</p>
                        <p className='descri-event'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, rerum.</p>
                    </div>
                </div>


            </div>
        </div>
    </>
}

