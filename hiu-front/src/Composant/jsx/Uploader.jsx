import React, { useEffect, useState } from "react";
import '../css/uploader.css'
import { HiDocumentArrowUp } from "react-icons/hi2";
import { Image } from "@nextui-org/react";
function Uploader({onChange}) {
    const [file,setFile]=useState(null);
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(URL.createObjectURL(selectedFile));
        onChange(event); 
    };
    return ( 
        <>
            <div className="uploader"
                onClick={()=>document.getElementById("image").click()}
            >
                <input 
                 onChange={handleFileChange}
                 type="file" name="image" id="image" hidden/>

                <div id="inner-upload" className="inner-upload">
                    {file ? 
                    <>
                        <Image
                        isZoomed
                        isBlurred
                        className="preview"
                        alt="NextUI Fruit Image with Zoom"
                        src={file}
                        />
                    </>
                        :
                        <>
                        <HiDocumentArrowUp className="upload-icon"/>
                        <p className="text-small">Choisir une image.</p> 
                    </>
                    }
                    
                </div>
            </div>
        </>
    );
}

export default Uploader;