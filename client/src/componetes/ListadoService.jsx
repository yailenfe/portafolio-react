import React from "react";
import Service from "./Service";
import Bloque from "./Bloque";
import "../style/ListadoService.scss";

class ListadoService extends React.Component {
    render() {
        return (
            <Bloque color="rgba(238, 238, 238, 0.933)">
                <h1 className="titulo-general">Service</h1>
                <div className="lista-service">
                    
                    <div className="style-service">
                        <Service
                            imagen="../icon/web-design-icon.png"
                            titulo="WEB DESIGN"
                            description="
                            Web design is an activity that consists of planning, designing and implementing websites. A web designer is concerned with how to create and develop a web page as well as how customers interact with it. ... equally,."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="../icon/web.jpg"
                            titulo="WEB DEVELOPMENT"
                            description="
                            Basically, the role of a web developer is to program websites and online applications for the company. This requires great knowledge of different tools, techniques and development concepts, since it is an area that does not stop evolving. The main languages ​​involved in The front-end are:
                            HTML;
                            CSS;
                            Javascript, with its many variations and libraries, like jQuery.."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="../icon/responsive-web-desig.jpg"
                            titulo="RESPONSIVE DESIGN"
                            description="
                            Adaptive web design is made possible by introducing media queries in CSS style properties in version 3. Media queries are a series of commands that are included in the style sheet that tells the HTML document how it must behave in different screen resolutions."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="../icon/354-3542510_web-design-development-web-development-web-design-icons.png"
                            titulo="WEB APPLICATION"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo fuga molestiae voluptas non fugit."
                        />
                    </div>
                   
                   
                </div>
            </Bloque>
        );
    }
}

export default ListadoService;
