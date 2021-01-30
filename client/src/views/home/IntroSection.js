import { useState } from 'react';
import "../../assets/css/views/home/intro_section.css";
import countryList from "country-list";

export default (props) => {
    const [selectedCountry, setSelectedCountry] = useState("Pick a country");
    const [searchValue, setSearchValue] = useState("");

    function listCountryItems() {
        return countryList.getNames().map(countryName => {
            return <a className="dropdown-item" onClick={() => setSelectedCountry(countryName)} key={countryName}>{countryName}</a>;
        });
    }

    function search() {
        props.history.push(`search?keyword=${searchValue}&location=${selectedCountry}`);
    }

    return (
        <div className="container-fluid p-0 intro-section">
            <div>
                <h1 className="title">Find Your Next Job</h1>
            </div>
            <div className="row mt-2">
                <input type="text" onChange={e => setSearchValue(e.target.value)} placeholder="Position name, tech name"></input>
                <div className="dropdown">
                    <button className="intro-dropdown center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>{selectedCountry}</span>
                        <i className="fas fa-angle-down"></i>
                    </button>
                    <div className="dropdown-menu country-dropdown" aria-labelledby="dropdownMenuButton">
                        {listCountryItems()}
                    </div>
                </div>
                <button className="btn-search" onClick={() => search()}><i className="fas fa-search"></i></button>
            </div>
        </div>
    )
}
