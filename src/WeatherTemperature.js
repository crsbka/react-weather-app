import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFar(event) {
        event.preventDefault();
        setUnit("Far");
    }

    function showCel(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (<span className="WeatherTemperature">
        <span className="main-temperature">{Math.round(props.celsius)}</span>

                <span className="units">°C | <a href="/" onClick={showFar}>°F</a></span>

        </span>
        );

    } else {
        let far = (props.celsius * 9/5) + 32;
        return (<span className="WeatherTemperature">
        <span className="main-temperature">{Math.round(far)}</span>

                <span className="units"><a href="/" onClick={showCel}>°C</a> | °F</span>

        </span>

        );
    }
}