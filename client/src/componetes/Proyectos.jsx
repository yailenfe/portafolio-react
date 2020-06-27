import React from "react";
import "../style/Proyecto.scss";

class Proyectos extends React.Component {
    render() {
        const { imagen, titulo, description,link} = this.props;
        return (
            <a href={link}  className="container-proyecto-link" target="_blank">
                <div className="container-proyecto">
                    <img src={imagen} alt="" />
                    <div>
                        <h3>{titulo}</h3>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        );
    }
}

export default Proyectos;
