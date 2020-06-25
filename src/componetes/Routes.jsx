import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Encabezado from "./Encabezado";
import Menu from "./Menu";
import About from "./About"
class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Menu />
                <Encabezado />
                <About/>
            </Router>
        );
    }
}

export default Routes;
