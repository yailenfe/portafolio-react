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
                            description="Responsive portfolio design using React and boostrap, which calls the API and returns a list of users."
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
                            description="Responsible portfolio created with React, which allows to visualize the different realized projects."
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
                            titulo="Learning-Mercadito"
                            description="Responsible design created with React, which allows you to make calls to the Api showing you the products and the details of each one of them."
                        />
                    </div>

                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-2.herokuapp.com/"}
                            imagen="../imagenes/design-2.png"
                            titulo="-Design-web"
                            description="Responsive portfolio created with HTML and CSS, which allows you to see the different projects carried out"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={
                                "https://yai-design-portfolio-2.herokuapp.com/"
                            }
                            imagen="./imagenes/portafolio-2.png"
                            titulo="Desing-Portfolio"
                            description="Responsive portfolio created with HTML and CSS, which allows you to see the different projects carried out"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-1.herokuapp.com/"}
                            imagen="./imagenes/design-1.png"
                            titulo="Design-Galery"
                            description="Design of a Gallery created with HTML and CSS, with animation and different effects."
                        />
                    </div>

                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-7.herokuapp.com/"}
                            imagen="./imagenes/design-7.png"
                            titulo="Page-Design"
                            description="Design of a web page created with HTML and CSS"
                        />
                    </div>
                    <div className="style-proyecto">
                        <Proyecto
                            link={"https://yai-design-3.herokuapp.com/"}
                            imagen="./imagenes/design-3.png"
                            titulo="Page-Design-HTML"
                            description="Design of a web page created with HTML and CSS"
                        />
                    </div>
                </div>
            </Bloque>
        );
    }
}

export default ListadoProyecto;
