import React from "react";
import {Link} from "react-router-dom";
import "../style/Menu.scss"

class Menu extends React.Component {
    render() {
        return (
            <div className="container-menu">
                    {/* <Link to="">HOME</Link>
                    <Link to="">ABOUT</Link>
                    <Link to="">WORKS</Link>
                    <Link to="">SERVICE</Link>
                    <Link to="">CONTACT</Link> */}
                    <a href="#about">HOME</a>
                    <a href="http://">ABOUT</a>
                    <a href="http://">WORKS</a>
                    <a href="http://">SERVICE</a>
                    <a href="http://">CONTACT</a>
                    
            </div>
        );
    }
}

export default Menu;
