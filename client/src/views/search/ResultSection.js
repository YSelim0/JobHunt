import React from "react";
import "../../assets/css/views/search/result-section.css";

class ResultSection extends React.Component {
    render() {
        return (
            <div className="container-fluid result-section">
                <div className="main-container">
                    <h1 className="title">Search results for "<span className="keyword">backend</span>"</h1>
                    <h6 className="description">There are 10 posts that meet these criteria.</h6>
                </div>
            </div>
        )
    }
}

export default ResultSection;
