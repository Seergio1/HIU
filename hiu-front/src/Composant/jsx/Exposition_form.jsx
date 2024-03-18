import '../css/expo.css'
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import axios from 'axios';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import { HiCheck } from "react-icons/hi2";

function Exposition_form() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState(new FormData());
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        handleOpen();
        try {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:8080/api/v1/Expositions',
                data: formData
            };
            // await axios.request(config)
            // .then((response) => {
            //     setFormData(new FormData());
            //     console.log(JSON.stringify(response.data));
            //     setLoading(false);
            // })
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        formData.append(name, value);
    };

    const handleOpen = () => {
        onOpen();
    }
    return (
        <>
            <section className='center h-screen flex items-center content-center'>
                <div className="rounded-md w-full flex flex-row child">
                    <div className="left">
                        <Image
                            isZoomed
                            isBlurred
                            className='image'
                            alt="NextUI Fruit Image with Zoom"
                            src="1.jpg"
                        />
                    </div>
                    <div className="right">
                        <div className="inner-right">
                            <h1 className='right-title'>Creer. Partager. Inspirer.</h1>
                            <p className='right-text'>Partagez votre créativité avec le monde ! Créez votre propre exposition.</p>
                            <form onSubmit={handleSubmit} className='w-full' action="">
                                <div className="theme">
                                    <Input onChange={handleInputChange} isRequired type="text" name='titre' label="Titre" />
                                    <Input onChange={handleInputChange} isRequired type="text" name='theme' label="Theme" />
                                </div>
                                <div className="date">
                                    <Input onChange={handleInputChange} isRequired className='dates' variant="bordered" type="date" name='debut' label="Debut" />
                                    <Input onChange={handleInputChange} isRequired className='dates' variant="bordered" type="date" name='fin' label="Fin" />
                                </div>
                                <button className='submit' type="submit">
                                    Creer
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                size='md'
                isOpen={isOpen}
                onClose={onClose}
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                            <ModalBody className='flex items-center content-center'>
                                {loading ? <Spinner /> :
                                    <>
                                        <span className='success'><HiCheck className='success-icon' /></span>
                                        <h1>Insertion reussie.</h1>
                                    </>
                                }
                            </ModalBody>
                            <ModalFooter></ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default Exposition_form;