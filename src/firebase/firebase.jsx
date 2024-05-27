import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDtKPFG33XQd0Sh8y3Bj6uapEXEMdNbXjE",
    authDomain: "tarea-usuarios.firebaseapp.com",
    projectId: "tarea-usuarios",
    storageBucket: "tarea-usuarios.appspot.com",
    messagingSenderId: "590456705928",
    appId: "1:590456705928:web:158964e3dd348ddf7be03d"
  };

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export async function uploadFile(file, txt) {
    const title = (txt)
    alert(title)
    const storageRef = ref(storage, `images/${title}`)
    return await uploadBytes(storageRef, file)
}

export async function deleteFile(txt) {
    var title = (txt)
    const storageRef = ref(storage, `images/${title}`)
    return await deleteObject(storageRef)
}