import React from "react";
import "../style/Encabezado.scss";


class Encabezado extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container-encabezado">
                    <h1 className="title">Yailen Fajardo Egues</h1>
                    <span className="subtitle">Front-end-Developer Jr</span>
                </div>
            </div>
        );
    }
}

export default Encabezado;
