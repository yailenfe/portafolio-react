import React from "react";
import Bloque from "./Bloque";
import "../style/Contactame.scss"

class Contactame extends React.Component {
    render() {
        return (
            <Bloque>
                <h1 className="titulo-general">Contact Me</h1>
                <div className="container-contacto">
                   <div className="container-contacto-peque">
                   <form action="">
                        <label className="label" htmlFor="name">
                            Your Name
                        </label>
                        <br />
                        <input className="input" type="text" name="nombre" />
                        <br />
                        <label className="label" htmlFor="email">
                            Your Email
                        </label>
                        <br />
                        <input className="input" type="email" name="correo" />
                        <br />
                        <label className="label" htmlFor="email">
                            Message
                        </label>
                        <br />
                        <textarea
                            className="inputo"
                            name=""
                            id="texto"
                        ></textarea>
                        <br />
                        <input
                            className="btnG"
                            type="submit"
                            value="Send Menssage"
                        />
                        <br />
                    </form>
                   </div>
                </div>
            </Bloque>
        );
    }
}

export default Contactame;
