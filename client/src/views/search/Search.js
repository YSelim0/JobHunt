import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import IntroSection from "./ResultSection";
import Content from "./Content";

class Search extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <IntroSection />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default Search;
