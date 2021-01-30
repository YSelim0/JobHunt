import { Link } from "react-router-dom";
import "../assets/css/header.css";

export default () => {
    return (
        <div className="main-container header">
            <Link to="/" className="logo"><span>{"{"}</span> JobHunt <span>{"}"}</span></Link>
            <Link to="post-job" className="btn-post">Post A Job</Link>
        </div>
    )
}