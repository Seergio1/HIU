import React, { useState } from "react";
import '../css/oeuvre.css'
import { Input } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import Uploader from "./Uploader";
import axios from 'axios';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import {Spinner} from "@nextui-org/react";
import { HiCheck } from "react-icons/hi2";
import { HiExclamationTriangle } from "react-icons/hi2";
function Oeuvre() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState(new FormData());
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        handleOpen();
        try {
            
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:8080/api/v1/Oeuvres',
                    data : formData
                    };
                    await axios.request(config)
                    .then((response) => {
                        setFormData(new FormData());
                        if (response.data.error!=null) {
                            setError(response.data.error);
                        }
                        console.log(JSON.stringify(response.data));
                        setLoading(false);
                    })
            
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (formData.get(name)!=null) {
            formData.set(name,value);
        } else {
            formData.append(name, value);
        }
    };

    const handleImageChange=(event)=>{
        formData.append("image",event.target.files[0]);
    }

    const handleOpen = () => {
        onOpen();
    }
    return (
        <>
            <section className='center h-screen flex items-center content-center'>
                <div className="rounded-md shadow-large w-full grid place-items-center child">
                    <div className="container">
                        <h1 className="title">Exposez votre oeuvre.</h1>
                        <p className="text">Faites partie d'une galerie virtuelle dynamique et présentez vos œuvres à un public captivé 
                        <br />par la beauté de l'art.</p>
                        <form onSubmit={handleSubmit} className="form" action="">
                            <div className="input-container">
                                <div className="left-form">
                                    <div className="input_box">
                                        <Input onChange={handleInputChange} isRequired type="text" name='titre' label="Titre" />
                                    </div>
                                    <div className="input_box">
                                        <Select
                                            name="exposition"
                                            className='w-full'
                                            isRequired
                                            label="Exposition"
                                            placeholder="Choisir une exposition"
                                            defaultSelectedKeys={["0"]}
                                            description="Choisir une exposition."
                                            onChange={handleInputChange}
                                        >
                                            <SelectItem key="0" value="0">
                                                Bandy milay
                                            </SelectItem>
                                            <SelectItem key="1" value="0">
                                                Dania
                                            </SelectItem>
                                        </Select>
                                    </div>
                                    <div className="input_box">
                                        <Input onChange={handleInputChange} type="date" name='dateparution' label="Titre" />
                                    </div>
                                    <div className="input_box textArea">
                                        <Textarea
                                            onChange={handleInputChange}
                                            className="descri w-full"
                                            label="Description"
                                            disableAutosize
                                            name="description"
                                            placeholder="Entrer une description"
                                        />
                                    </div>
                                </div>
                                <div className="right-form">
                                    <Uploader onChange={handleImageChange}/>
                                    <div className="taille">
                                        <Input onChange={handleInputChange} isRequired type="number" name='longueur' label="Longueur" />
                                        <Input onChange={handleInputChange} isRequired type="number" name='largeur' label="Largeur" />
                                    </div>
                                </div>
                            </div>
                            <button className='submit' type="submit">
                                    Creer
                            </button>
                        </form>
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
                                    {error 
                                    ?
                                        <>
                                            <span className='error'><HiExclamationTriangle className="icon"/></span>
                                            <p></p>
                                        </>
                                        :
                                        <>
                                            <span className='success'><HiCheck className='icon' /></span>
                                            <h1>Poins io</h1>
                                        </>
                                    }
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

export default Oeuvre;