import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";

function App() {
    return (
        <div className="App">
            <Weather defaultCity="Vladivostok"/>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
