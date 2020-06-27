import React from "react";
import "../style/Service.scss"

class Service extends React.Component {
    render() {
        const { imagen, titulo, description } = this.props;
        return (
            <div className="container-service">
                <img src={imagen} alt="" />
                <h2>{titulo}</h2>
                <span>{description}</span>
            </div>
        );
    }
}


export default Service