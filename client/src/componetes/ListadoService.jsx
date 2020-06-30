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
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo fuga molestiae voluptas non fugit."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="../icon/web.jpg"
                            titulo="WEB DEVELOPMENT"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo fuga molestiae voluptas non fugit."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="../icon/responsive-web-desig.jpg"
                            titulo="RESPONSIVE DESIGN"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo fuga molestiae voluptas non fugit."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="../icon/354-3542510_web-design-development-web-development-web-design-icons.png"
                            titulo="WEB APPLICATION"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo fuga molestiae voluptas non fugit."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="../icon/images.png"
                            titulo="WEB APPLICATION"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo fuga molestiae voluptas non fugit."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="../icon/pipo.jpg"
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
