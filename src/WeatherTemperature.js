import React from "react";
import "./Weather.css";


export default function WeatherTemperature(props) {
    return (<span className="WeatherTemperature">
        <span className="main-temperature">{Math.round(props.celsius)}</span>

              <span className="units">°C </span>

        </span>
    );

}