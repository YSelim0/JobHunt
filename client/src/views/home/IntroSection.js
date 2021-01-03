import React from 'react';
import "../../assets/css/views/home/intro_section.css";

class IntroSection extends React.Component {
    render() {
        return (
            <div className="container-fluid p-0 intro-section">
                <div>
                    <h1 className="title">Find Your Next Job</h1>
                </div>
                <div className="row mt-2">
                    <input type="text" placeholder="Position name, tech name"></input>
                    <div className="dropdown">
                        <button className="intro-dropdown center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Pick a country</span>
                            <i className="fas fa-angle-down"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Country name</a>
                        </div>
                    </div>
                    <button className="btn-search"><i className="fas fa-search"></i></button>
                </div>
            </div>
        )
    }
}

export default IntroSection;