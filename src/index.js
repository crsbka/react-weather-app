import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";


import "./App.css";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Weather defaultCity="Toronto"/>
            </div>
            <Footer/>
        </div>

    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
