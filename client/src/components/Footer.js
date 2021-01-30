import { Link } from "react-router-dom";
import "../assets/css/footer.css";

export default () => {
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
                            <li><i className="fas fa-caret-right"></i>   <Link to="search?keyword=frontend">Frontend developer</Link></li>    
                            <li><i className="fas fa-caret-right"></i>   <Link to="search?keyword=backend">Backend developer</Link></li>    
                            <li><i className="fas fa-caret-right"></i>   <Link to="search?keyword=mobile">Mobile developer</Link></li>    
                        </ul>
                    </div>

                    <div className="col-auto mr-5">
                        <h5>Jobs by post type</h5>
                        <ul>
                            <li><i className="fas fa-caret-right"></i>   <Link to="search?type=1">Full time jobs</Link></li>    
                            <li><i className="fas fa-caret-right"></i>   <Link to="search?type=2">Part time jobs</Link></li>    
                            <li><i className="fas fa-caret-right"></i>   <Link to="search?type=3">Remote jobs</Link></li>    
                        </ul>
                    </div>

                    <div className="col-auto offset pr-0">
                        <h5>Jobs by country</h5>
                        <ul>
                            <li><i className="fas fa-caret-right"></i>   <Link to="search?location=US">USA</Link></li>    
                            <li><i className="fas fa-caret-right"></i>   <Link to="search?location=UK">England</Link></li>    
                            <li><i className="fas fa-caret-right"></i>   <Link to="search?location=TR">Turkey</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}