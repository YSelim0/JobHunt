import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "./Form";

class PostJob extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Form />
                <Footer />
            </div>
        )
    }
}

export default PostJob;
