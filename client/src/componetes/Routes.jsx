import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Encabezado from "./Encabezado";
import Menu from "./Menu";
import About from "./About";
import ListadoProyecto from "./ListadoProyecto";
import ListadoService from "./ListadoService";
import Contactame from "./Contactame";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Menu />
                <Encabezado />
                <div id="about">
                    <About />
                </div>
                <ListadoProyecto />
                <ListadoService />
                <Contactame />
            </Router>
        );
    }
}

export default Routes;
