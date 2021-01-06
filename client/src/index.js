import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home/Home";
import PostJob from "./views/post-job/PostJob";
import Search from "./views/search/Search";

import "./index.css";
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/post-job" component={PostJob}></Route>
                <Route path="/search" component={Search}></Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
