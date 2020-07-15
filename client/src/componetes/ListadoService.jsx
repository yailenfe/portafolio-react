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
                            "
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="../icon/web.jpg"
                            titulo="WEB DEVELOPMENT"
                            description="
                            "
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="../icon/responsive-web-desig.jpg"
                            titulo="RESPONSIVE DESIGN"
                            description=""
                        />
                    </div>
                
                   
                   
                </div>
            </Bloque>
        );
    }
}

export default ListadoService;
