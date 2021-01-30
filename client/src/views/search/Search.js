import Header from "../../components/Header";
import Footer from "../../components/Footer";
import IntroSection from "./ResultSection";
import Content from "./Content";

export default (props) => {
    return (
        <div>
            <Header />
            <IntroSection />
            <Content query={props.location.search} />
            <Footer />
        </div>
    )
}