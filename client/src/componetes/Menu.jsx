import React from "react"
import "../style/Menu.scss";

class Menu extends React.Component {
    render() {
        return (
            <div className="container-menu">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">WORKS</a>
                <a href="#">SERVICE</a>
                <a href="#">CONTACT</a>
            </div>
        );
    }
}

export default Menu;
