import React from 'react';
import './App.css';
import Subir from "../src/componentes/subir";
import Borrar from "../src/componentes/borrar";
import Actualizar from "../src/componentes/actualizar";

function App() {
  return (
    <div className="App">
      <h1>CRUD de Imágenes con Firebase</h1>
      <Subir />
      <Actualizar />
      <Borrar />
    </div>
  );
}

export default App;
