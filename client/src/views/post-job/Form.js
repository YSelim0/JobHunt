import React from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "../../assets/css/views/post-job/form.css";

class Form extends React.Component {
    componentDidMount() {
        var toolbarOptions = [
            [{ "size": [] }],
            [ "bold", "italic", "underline", "strike" ],
            [{ "color": [] }, { "background": [] }],
            [{ "align": [] }, { "align": ["center"] }, { "align": ["right"] }, { "align": ["justify"] }],
            [{ "list": "ordered" }, { "list": "bullet"}, { "list": "check"}],
            [{ "indent": "-1" }, { "indent": "+1" }],
            [ "link", "video" ],
            [ "blockquote", "code-block" ],
            [ "clean" ]
        ];

        new Quill("#post-description", {
            modules: {
                toolbar: toolbarOptions
            },
            theme: "snow"
        });
    }

    render() {
        return (
            <div className="main-container">
                <div className="container-fluid form">
                    <h3 className="title">Company details</h3>
                    
                    <div className="input-area">
                        <label className="subtitle">Company name</label>
                        <input type="text" className="form-control" aria-label="Large"></input>
                    </div>

                    <div className="input-area">
                        <label className="subtitle">E-mail address</label>
                        <input type="text" className="form-control" aria-label="Large"></input>
                    </div>

                    <div className="input-area">
                        <label className="subtitle">Website</label>
                        <input type="text" className="form-control" aria-label="Large"></input>
                    </div>

                    <div className="input-area">
                        <label className="subtitle">Logo URL</label>
                        <input type="text" className="form-control" aria-label="Large"></input>
                    </div>

                    <div className="input-area">
                        <label className="subtitle">Twitter username (optional)</label>
                        <input type="text" className="form-control" aria-label="Large"></input>
                    </div>

                    <div className="input-area">
                        <label className="subtitle">Linkedin URL (optional)</label>
                        <input type="text" className="form-control" aria-label="Large"></input>
                    </div>

                    <h3 className="title mt-5">Job details</h3>
                    
                    <div className="input-area mt-4">
                        <label className="subtitle">Position</label>
                        <input type="text" className="form-control" aria-label="Large"></input>
                    </div>

                    <div className="input-area">
                        <label className="subtitle">Post description</label>
                        <div id="post-description"></div>
                    </div>

                    <div className="input-area">
                        <label className="subtitle">Location</label>
                        <div className="dropdown">
                            <button className="intro-dropdown center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>Pick a country</span>
                                <i className="fas fa-angle-down"></i>
                            </button>
                            <div className="dropdown-menu mt-1" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Country name</a>
                            </div>
                        </div>
                    </div>

                    <div className="input-area">
                        <label className="subtitle">Post type</label>
                        <div className="dropdown">
                            <button className="intro-dropdown center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>Full time</span>
                                <i className="fas fa-angle-down"></i>
                            </button>
                            <div className="dropdown-menu mt-1" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Full time</a>
                                <a className="dropdown-item" href="#">Part time</a>
                                <a className="dropdown-item" href="#">Remote</a>
                            </div>
                        </div>
                    </div>

                    <div className="input-area">
                        <label className="subtitle">Tags</label>
                        <input type="text" className="form-control" aria-label="Large"></input>
                    </div>

                    <h3 className="title mt-5">Contact information</h3>
                    
                    <div className="input-area mt-4">
                        <label className="subtitle">URL</label>
                        <input type="text" className="form-control" aria-label="Large"></input>
                    </div>

                    <div className="input-area">
                        <label className="subtitle">E-mail</label>
                        <input type="text" className="form-control" aria-label="Large"></input>
                    </div>

                    <button className="btn-preview">Preview</button>
                </div>
            </div>
        )
    }
}

export default Form;
