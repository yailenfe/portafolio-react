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
                            link={"https://yai-design-4.herokuapp.com/"}
                            imagen="../imagenes/always.png"
                            titulo="Yai-Design-Learnig-Post"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-6.herokuapp.com/"}
                            imagen="../imagenes/desig-6.png"
                            titulo="Yai-Design-Learning-Mercadito"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={
                                "https://yai-design-portfolio-3.herokuapp.com/"
                            }
                            imagen="../imagenes/portafolio.png"
                            titulo="Yai-Design-Portfolio-float"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-5.herokuapp.com/"}
                            imagen="../imagenes/calculadora.jpg"
                            titulo="Yai-Design-Calculadora"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-2.herokuapp.com/"}
                            imagen="../imagenes/design-2.png"
                            titulo="Yai-Design-Page-web"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={
                                "https://yai-design-portfolio-2.herokuapp.com/"
                            }
                            imagen="./imagenes/portafolio-2.png"
                            titulo="Yai-Desing-Portfolio"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={
                                "https://yai-design-1.herokuapp.com/"
                            }
                            imagen="./imagenes/design-1.png"
                            titulo="Yai-Design-Galery"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={
                                "https://yai-design-7.herokuapp.com/"
                            }
                            imagen="./imagenes/design-7.png"
                            titulo="Yai-Design-Page"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={
                                "hhttps://yai-portfolio.herokuapp.com/"
                            }
                            imagen="../imagenes/yai-porttafolio1.png"
                            titulo="yai-portafolio"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                </div>
            </Bloque>
        );
    }
}

export default ListadoProyecto;
