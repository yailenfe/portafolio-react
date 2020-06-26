import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Encabezado from "./Encabezado";
import Menu from "./Menu";
import About from "./About";
import Proyectos from "./Proyectos";
import ListadoProyecto from "./ListadoProyecto";
import ListadoService from "./ListadoService";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Menu />
                <Encabezado />
                <About />
                <ListadoProyecto />
                <ListadoService />
            </Router>
        );
    }
}

export default Routes;
