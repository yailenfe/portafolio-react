import React from "react";
import Bloque from "./Bloque";
import Proyecto from "./Proyectos";
import "../style/ListadoProyecto.scss";

class ListadoProyecto extends React.Component {
    render() {
        return (
            <Bloque>
                <h1 className="titulo-general">Works</h1>
                <div className="lista-proyectos">
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://always-learning.herokuapp.com/"}
                            imagen="./always.png"
                            titulo="Always Learning"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={
                                "https://learning-mercado-libre.herokuapp.com/"
                            }
                            imagen="./meracdo.png"
                            titulo="Learning Mercado-Libre"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={
                                "https://yailen-fajardo-egues-portfolio.herokuapp.com/"
                            }
                            imagen="./portafolio.png"
                            titulo="Portafolio"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={
                                "https://yai-calc.herokuapp.com/"
                            }
                            imagen="./calculadora.png"
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
                            imagen="./jpg-1.jpg"
                            titulo="mac"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                </div>
            </Bloque>
        );
    }
}

export default ListadoProyecto;
