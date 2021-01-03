import React from "react";
import "../assets/css/header.css";

class Header extends React.Component {
    render() {
        return (
            <div className="main-container header">
                <h1 className="logo"><span>{"{"}</span> JobHunt <span>{"}"}</span></h1>
                <button className="btn-post">Post A Job</button>
            </div>
        )
    }
}

export default Header;