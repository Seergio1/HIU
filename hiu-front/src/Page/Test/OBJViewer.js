import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function OBJViewer({ objFilePath }) {
    const containerRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer;

        // Créer une scène
        scene = new THREE.Scene();

        // Créer une caméra
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 20;

        // Créer un renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Charger le fichier .obj
        const loader = new OBJLoader();
        loader.load(
            objFilePath,
            function (obj) {
                // Ajouter l'objet à la scène
                scene.add(obj);

                // Ajouter le renderer à la page
                containerRef.current.appendChild(renderer.domElement);

                // Animation de rendu
                function animate() {
                    requestAnimationFrame(animate);
                    renderer.render(scene, camera);
                }

                animate();
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% chargé');
            },
            function (error) {
                console.error('Erreur de chargement', error);
            }
        );

        // Nettoyage lors du démontage du composant
        return () => {
            renderer.dispose();
        };
    }, [objFilePath]);

    return <div ref={containerRef} />;
}

export default OBJViewer;
