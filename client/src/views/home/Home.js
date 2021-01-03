import React from "react";
import Header from "../../components/Header";
import IntroSection from "./IntroSection";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <IntroSection />
            </div>
        )
    }
}

export default Home;