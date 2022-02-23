import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Weather defaultCity="Vladivostok"/>

            </div>
            <Footer/>
        </div>

    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
