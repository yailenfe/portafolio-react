import React from "react";
import "../style/Footer.scss";

class Footer extends React.Component {
    render() {
        const year = new Date().getFullYear();

        return (
            <footer className="container-footer">
                <span>© Yailen Fajardo: Diseñador Web {year} </span>
                <ul className="conatiner-icon">
                    <li>
                        <a href="https://www.linkedin.com/in/yailen-fajardo-584141190/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/yailenfe" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:yailenfajardoegues@gmail.com" target="_blank">
                            <i class="fas fa-envelope-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/59895032039/?text=Hola%20Quisira%20Informacion" target="_blank">
                            <i class="fab fa-whatsapp-square"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;
