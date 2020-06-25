import React from "react";

export default class Bloque extends React.Component {
    render() {
        return <div className="bloque" style={{background:this.props.color||"white"}}>{this.props.children}</div>;
    }
}
