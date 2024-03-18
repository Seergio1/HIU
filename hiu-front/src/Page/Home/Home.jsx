import React, { useEffect } from 'react'
import './Home.css'
import Lenis from "@studio-freight/lenis";
import NavBar from '../../Composant/nav-bar/NavBar';
import BackVideo from '../../Composant/background-video/BackVideo';
import DescriSection from '../../Composant/description-section/DescriSection';
import { GalleryCarousel } from '../../Composant/gallery-carousel/GalleryCarousel';

import ScrollText from '../../Composant/scroll-text/ScrollText';
import Pub from '../../Composant/pub/Pub';
function Home() {

    return <>
        <BackVideo />
        <DescriSection />
        <GalleryCarousel />
        <ScrollText items={["DÉCOUVREZ, PARTAGEZ, VIVEZ L'ART ET LA CULTURE EN UN SEUL LIEU", "-"]} repeat={4} gap={30} duration={30} />
        <Pub />
    </>
}

export default Home