import React from "react";
import "../../assets/css/views/search/quick-search.css";

class QuickSearch extends React.Component {
    render() {
        return (
            <div className="quick-search">
                <input type="text" className="form-control" placeholder="Position name, tech name"></input>
                
                <div className="dropdown mt-2">
                    <button className="quick-searh-dropdown center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>Pick a country</span>
                        <i className="fas fa-angle-down"></i>
                    </button>
                    <div className="dropdown-menu mt-1" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Country name</a>
                    </div>
                </div>

                <div className="dropdown mt-2">
                    <button className="quick-searh-dropdown center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>Full time</span>
                        <i className="fas fa-angle-down"></i>
                    </button>
                    <div className="dropdown-menu mt-1" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Full time</a>
                        <a className="dropdown-item" href="#">Part time</a>
                        <a className="dropdown-item" href="#">Remote</a>
                    </div>
                </div>

                <button className="btn-search mt-3">Search</button>
            </div>
        )
    }
}

export default QuickSearch;
