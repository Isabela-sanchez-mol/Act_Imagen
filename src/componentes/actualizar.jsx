import React, { useState } from 'react';
import { uploadFile } from '../firebase/firebase';

const Actualizar = () => {
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
                <input type="text" placeholder='Nombre de la imagen para actualizar' onChange={(e) => setTxt(e.target.value)}/>
                <button onClick={handleUpload}>Actualizar Imagen</button>
            </form>
        </div>
    );
};

export default Actualizar;
