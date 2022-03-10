import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";


export default function ForecastDay(props) {

    function maxTemp() {
        let temp = Math.round(props.data.temp.max);
        return `${temp}°`;
    }

    function minTemp() {
        let temp = Math.round(props.data.temp.min);
        return `${temp}°`;
    }


    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <div className="forecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={48}/>
            <div className="forecast-temps">
                <span className="forecast-temps-max">{maxTemp()}</span>
                <span className="forecast-temps-min">{minTemp()}</span>
            </div>
        </div>
    )

}