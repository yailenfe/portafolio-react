import React from "react";
import Encabezado from "./componetes/Encabezado";
import Menu from "./componetes/Menu";
import About from "./componetes/About";
import ListadoProyecto from "./componetes/ListadoProyecto";
import ListadoService from "./componetes/ListadoService";
import Contactame from "./componetes/Contactame";
import Footer from "./componetes/Footer";

function App() {
    return (
        <>
            <Menu />
            <Encabezado />
            <About />
            <ListadoProyecto />
            <ListadoService />
            <Contactame />
            <Footer/>
        </>
    );
}

export default App;
