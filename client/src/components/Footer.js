import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid footer pl-0 pr-0">
                <div className="main-container d-flex justify-content-between">
                    <div className="col-auto left-side pl-0">
                        <Link to="/" className="logo"><span>{"{"}</span> JobHunt <span>{"}"}</span></Link>
                        <span>@ {new Date().getFullYear()} JobHunt. All rights reserved.</span>
                    </div>

                    <div className="col-auto d-flex justif-content-end">
                        <div className="col-auto mr-5">
                            <h5>Jobs by position</h5>
                            <ul>
                                <li><i className="fas fa-caret-right"></i>   <a href="#">Frontend developer</a></li>    
                                <li><i className="fas fa-caret-right"></i>   <a href="#">Backend developer</a></li>    
                                <li><i className="fas fa-caret-right"></i>   <a href="#">Mobile developer</a></li>    
                            </ul>
                        </div>

                        <div className="col-auto mr-5">
                            <h5>Jobs by post type</h5>
                            <ul>
                                <li><i className="fas fa-caret-right"></i>   <a href="#">Full time jobs</a></li>    
                                <li><i className="fas fa-caret-right"></i>   <a href="#">Part time jobs</a></li>    
                                <li><i className="fas fa-caret-right"></i>   <a href="#">Remote jobs</a></li>    
                            </ul>
                        </div>

                        <div className="col-auto offset pr-0">
                            <h5>Jobs by country</h5>
                            <ul>
                                <li><i className="fas fa-caret-right"></i>   <a href="#">USA</a></li>    
                                <li><i className="fas fa-caret-right"></i>   <a href="#">England</a></li>    
                                <li><i className="fas fa-caret-right"></i>   <a href="#">Turkey</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
