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
                            link={
                                "https://yai-design-portfolio-3.herokuapp.com/"
                            }
                            imagen="../imagenes/portafolio.png"
                            titulo="PortFolio Floating"
                            description="Responsive portfolio design in HTML and CSS, applying dynamic styles"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-todo-json.herokuapp.com/"}
                            imagen="./imagenes/yai-desing-todo.png"
                            titulo="Todos JSON"
                            description="
                            Responsive portfolio design using React and boostrap, which calls the API and returns a list of users, which when clicked returns a list of details of the tasks completed and those that remain to be done by each user"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-5.herokuapp.com/"}
                            imagen="../imagenes/calculadora.jpg"
                            titulo="Design Calculadora"
                            description=" Responsive design using HTML, CSS and JS"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-portfolio.herokuapp.com/"}
                            imagen="../imagenes/yai-porttafolio1.png"
                            titulo="Portafolio"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-4.herokuapp.com/"}
                            imagen="../imagenes/always.png"
                            titulo="Learnig Post"
                            description="
                            Responsive design that allows making calls to the Jsonplaceholder API, returning a list of users and users' posts."
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-6.herokuapp.com/"}
                            imagen="../imagenes/desig-6.png"
                            titulo="Design-Learning-Mercadito"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>

                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-2.herokuapp.com/"}
                            imagen="../imagenes/design-2.png"
                            titulo="Design-Page-web"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={
                                "https://yai-design-portfolio-2.herokuapp.com/"
                            }
                            imagen="./imagenes/portafolio-2.png"
                            titulo="Desing-Portfolio"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-1.herokuapp.com/"}
                            imagen="./imagenes/design-1.png"
                            titulo="Design-Galery"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>

                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-7.herokuapp.com/"}
                            imagen="./imagenes/design-7.png"
                            titulo="Design-Page"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-3.herokuapp.com/"}
                            imagen="./imagenes/design-3.png"
                            titulo="Design-Page-HTML"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad laboriosam soluta?"
                        />
                    </div>
                </div>
            </Bloque>
        );
    }
}

export default ListadoProyecto;
