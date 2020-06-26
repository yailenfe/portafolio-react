import React from "react";
import "../style/Proyecto.scss";

class Proyectos extends React.Component {
    render() {
        const { imagen, titulo, description } = this.props;
        return (
            <>
                <div className="container-proyecto">
                    <img src={imagen} alt="" />
                    <div>
                        <h3>{titulo}</h3>
                        <span>{description}</span>
                    </div>
                </div>
            </>
        );
    }
}

export default Proyectos;
