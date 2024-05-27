import React, { useState } from 'react';
import { deleteFile } from '../firebase/firebase';

const Borrar = () => {
    const [txt, setTxt] = useState("");

    const handleDelete = async (e) => {
        e.preventDefault();
        await deleteFile(txt);
        alert(txt)
    };

    return (
        <div>
            <form>
                <input type="text" placeholder='Nombre de la imagen' onChange={(e) => setTxt(e.target.value)} />
                <br />
                <button onClick={handleDelete}>Borrar Imagen</button>
            </form>
        </div>
    );
};

export default Borrar;
