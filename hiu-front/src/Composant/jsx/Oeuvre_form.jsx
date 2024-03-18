import React, { useEffect, useState } from "react";
import '../css/oeuvre.css'
import { Input } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import Uploader from "./Uploader";
import axios from 'axios';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
<<<<<<< HEAD
import { Spinner } from "@nextui-org/react";
=======
import {Spinner} from "@nextui-org/react";
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85
import { HiCheck } from "react-icons/hi2";
import { HiExclamationTriangle } from "react-icons/hi2";
function Oeuvre() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState(new FormData());
<<<<<<< HEAD
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [data, setData] = useState(null);

    useEffect(function () {
=======
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const [data,setData]=useState(null);

    useEffect(async function () {
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85
        setLoading(true);
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/api/v1/Expositions',
        };
<<<<<<< HEAD
        // await axios.request(config)
        //     .then((response) => {
        //         setData(response.data.data[0]);
        //         setLoading(false);
        //         console.log(response.data.data[0]);
        //     })
    }, []);
=======
            await axios.request(config)
            .then((response) => {
                setData(response.data.data[0]);
                setLoading(false);
                console.log(response.data.data[0]);
            })
    }
    ,[]);
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        handleOpen();
        try {
<<<<<<< HEAD
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:8080/api/v1/Oeuvres',

                data: formData,
                headers: {
                    authorization: "Bearer " + localStorage.getItem("Token")
                }
            };
            // await axios.request(config)
            //     .then((response) => {
            //         setFormData(new FormData());
            //         if (response.data.error != null) {
            //             setError(response.data.error);
            //         }
            //         console.log(JSON.stringify(response.data));
            //         setLoading(false);
            //     })

=======
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:8080/api/v1/Oeuvres',

                    data : formData,
                    headers:{
                        authorization:"Bearer "+localStorage.getItem("Token")
                    }
                };
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
            
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
<<<<<<< HEAD
        if (formData.get(name) != null) {
            formData.set(name, value);
=======
        if (formData.get(name)!=null) {
            formData.set(name,value);
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85
        } else {
            formData.append(name, value);
        }
    };

<<<<<<< HEAD
    const handleImageChange = (event) => {
        formData.append("image", event.target.files[0]);
=======
    const handleImageChange=(event)=>{
        formData.append("image",event.target.files[0]);
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85
    }

    const handleOpen = () => {
        onOpen();
    }
    return (
        <>
<<<<<<< HEAD
            <section className='center flex items-center content-center'>
                <div className="rounded-md w-full grid place-items-center child">

                    <div className="container-oeuvre">
                        <h1 className="title">Exposez votre oeuvre.</h1>
                        <p className="text">Faites partie d'une galerie virtuelle dynamique et présentez vos œuvres à un public captivé
                            <br />par la beauté de l'art.</p>
=======
            <section className='center h-screen flex items-center content-center'>
                <div className="rounded-md shadow-large w-full grid place-items-center child">

                    <div className="container-oeuvre">
                        <h1 className="title">Exposez votre oeuvre.</h1>
                        <p className="text">Faites partie d'une galerie virtuelle dynamique et présentez vos œuvres à un public captivé 
                        <br />par la beauté de l'art.</p>
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85
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

                                            description="Choisir une exposition."
                                            onChange={handleInputChange}
                                        >
<<<<<<< HEAD
                                            {data ?
                                                data.map((d) => (
                                                    <SelectItem key={d.id} value={d.id}>
                                                        {d.titre}
                                                    </SelectItem>
                                                ))
                                                :
                                                <SelectItem key="0" value="0">

                                                </SelectItem>
                                            }
=======
                                        {data ? 
                                            data.map((d)=>(
                                                <SelectItem key={d.id} value={d.id}>
                                                    {d.titre}
                                                </SelectItem>
                                            ))
                                            :
                                            <SelectItem key="0" value="0">
                                                
                                            </SelectItem>
                                        }
                                            defaultSelectedKeys={["0"]}
                                            description="Choisir une exposition."
                                            onChange={handleInputChange}
                                        >
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85
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
<<<<<<< HEAD
                                    <Uploader onChange={handleImageChange} />
=======
                                    <Uploader onChange={handleImageChange}/>
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85
                                    <div className="taille">
                                        <Input onChange={handleInputChange} isRequired type="number" name='longueur' label="Longueur" />
                                        <Input onChange={handleInputChange} isRequired type="number" name='largeur' label="Largeur" />
                                    </div>
                                </div>
                            </div>
                            <button className='submit' type="submit">
<<<<<<< HEAD
                                Creer
=======
                                    Creer
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85
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
<<<<<<< HEAD
                                        {error
                                            ?
                                            <>
                                                <span className='error'><HiExclamationTriangle className="icon" /></span>
                                                <p></p>
                                            </>
                                            :
                                            <>
                                                <span className='success'><HiCheck className='icon' /></span>
                                                <h1>Poins io</h1>
                                            </>
                                        }
=======
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
>>>>>>> 96875d133b898af3a4b24148f03235bd5cf5aa85
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