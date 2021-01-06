import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import IntroSection from "./ResultSection";

class Search extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <IntroSection />
                <Footer />
            </div>
        )
    }
}

export default Search;
