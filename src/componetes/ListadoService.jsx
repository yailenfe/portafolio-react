import React from "react";
import Service from "./Service";
import Bloque from "./Bloque";
import "../style/ListadoService.scss";

class ListadoService extends React.Component {
    render() {
        return (
            <Bloque color="rgba(238, 238, 238, 0.933)">
                <div className="lista-service">
                    <div className="style-service">
                        <Service
                            imagen="./jpg-1.jpg"
                            titulo="Web Disaining"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo fuga molestiae voluptas non fugit."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="./jpg-1.jpg"
                            titulo="Web Disaining"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo fuga molestiae voluptas non fugit."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="./jpg-1.jpg"
                            titulo="Web Disaining"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo fuga molestiae voluptas non fugit."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="./jpg-1.jpg"
                            titulo="Web Disaining"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo fuga molestiae voluptas non fugit."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="./jpg-1.jpg"
                            titulo="Web Disaining"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo fuga molestiae voluptas non fugit."
                        />
                    </div>
                    <div className="style-service">
                        <Service
                            imagen="./jpg-1.jpg"
                            titulo="Web Disaining"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo fuga molestiae voluptas non fugit."
                        />
                    </div>
                </div>
            </Bloque>
        );
    }
}

export default ListadoService;
