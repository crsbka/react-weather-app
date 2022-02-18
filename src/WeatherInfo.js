import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
return (
    <div className="WeatherInfo">
        <div className="row">
            <div className="col-12">
                <h2 className="city-name">{props.data.city}</h2>
            </div>
        </div>

        <div className="row">

            <div id="current-info" className="col-5">


                <FormattedDate date = {props.data.date}/>


                <div id="weather-description" className="conditions text-capitalize">{props.data.description}</div>
                <img src={props.data.imgUrl} alt="pic" id="main-icon"/>

                <div className="float-left" id="weather-temp">
                    <span className="main-temperature" id="main-temperature">{Math.round(props.data.temperature)} </span>
                    <span className="units">
                          <a href="/" id="celsius-link" className="active">°C</a>|<a href="/" id="fahrenheit-link">°F</a>
                        </span>
                </div>
            </div>

            <div className="col-7">
                <div className="row" id="weather-info">
                    <div className="col-5">
                        <span className="float-left">Feels like</span>
                        <span id="feels-like-value" className="float-right">{Math.round(props.data.feelslike)}°</span>
                    </div>
                    <div className="col-5">
                        <span className="float-left">Wind</span>
                        <span id="wind" className="float-right">{props.data.wind}km/h E</span>
                    </div>
                    <div className="col-5">
                        <span className="float-left">Pressure</span>
                        <span id="pressure" className="float-right">{props.data.pressure}hPa</span>
                    </div>
                    <div className="col-5">
                        <span className="float-left">Humidity</span>
                        <span id="humidity" className="float-right">{props.data.humidity}%</span>
                    </div>
                </div>
            </div>
        </div>

        <div id="footer">This project was coded by <a href="https://www.linkedin.com/in/kristina-laktiushkina/">Kristina
            Laktiushkina</a> and is
            <a href="https://github.com/crsbka/react-weather-app"> open-sourced on GitHub</a>
        </div>
    </div>);
}