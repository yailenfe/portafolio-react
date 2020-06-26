import React from "react";
import Bloque from "./Bloque";
import Proyecto from "./Proyectos";
import "../style/ListadoProyecto.scss";

class ListadoProyecto extends React.Component {
    render() {
        return (
            <Bloque>
                <div className="lista-proyectos">
                    <div className="style-proyecto">
                        <Proyecto
                            imagen="./jpg2.jpg"
                            titulo="Calculadora"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            imagen="./jpg2.jpg"
                            titulo="Calculadora"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            imagen="./jpg2.jpg"
                            titulo="Calculadora"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            imagen="./jpg2.jpg"
                            titulo="Calculadora"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            imagen="./jpg2.jpg"
                            titulo="Calculadora"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            imagen="./jpg2.jpg"
                            titulo="Calculadora"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    
                </div>
            </Bloque>
        );
    }
}

export default ListadoProyecto;
