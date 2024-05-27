import React, { useState } from 'react';
import { uploadFile } from '../firebase/firebase';

const Subir = () => {
    const [image, setImage] = useState(null);
    const [txt, setTxt] = useState("");

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        await uploadFile(image, txt);
    };

    return (
        <div>
            <form>
                <input type="file" onChange={handleChange} />
                <input type="text" placeholder='Nombre para la imagen' onChange={(e) => setTxt(e.target.value)}/>
                <button onClick={handleUpload}>Subir Imagen</button>
            </form>
        </div>
    );
};

export default Subir;
