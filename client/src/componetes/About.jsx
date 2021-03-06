import React from "react";
import "../style/About.scss";
import Bloque from "./Bloque";


class About extends React.Component {
    render() {
        return (
            <Bloque color="rgba(238, 238, 238, 0.933)">
                <h1 className="titulo-general">About Me</h1>

                <div className="container-about">
                    
                    <img src="../imagenes/perfil.jpeg" alt="" />

                    <div className="container-abaut-inf">
                        <div className="info-personal">
                            <p>
                                Yailen is persistent, ambitious in terms of
                                quality results. He likes excellence in the
                                operation of the final product. He is always
                                learning and doing his best in everything he
                                does. As part of a team, you carry out your
                                tasks and contribute with others to carry out
                                the project forward
                            </p>
                            <a
                                className="btn"
                                href="https://docs.google.com/document/u/0/export?format=pdf&id=1DHkn8TSxjI4cn_cjNWN2xpiQc73dduVqlRE7ThpaDLQ"
                            >
                                Download CV
                            </a>
                        </div>
                        <div className="info-contact">
                            <strong>
                                Name: <span>Yailen Fajardo Egues</span>
                            </strong>
                            <strong>
                                Birthday: <span>23-07-1993</span>
                            </strong>
                            <strong>
                                Gender: <span>Female</span>
                            </strong>
                            <strong>
                                E-mail:{" "}
                                <span>yailenfajardoegues@gmail.com</span>
                            </strong>
                            <strong>
                                Country: <span>Montevideo,Uruguay</span>
                            </strong>
                            <strong>
                                Phone: <span>+598 95032039</span>
                            </strong>
                        </div>
                    </div>
                </div>
            </Bloque>
        );
    }
}

export default About;
