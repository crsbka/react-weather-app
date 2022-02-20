import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-12">
                    <h2 className="city-name">{props.data.city}</h2>
                </div>
            </div>

            <div className="row">

                <div className="conditions col-5">


                    <FormattedDate date={props.data.date}/>

                    <div className="text-capitalize">{props.data.description}</div>


                    <div className="float-left">

                        <WeatherIcon code={props.data.icon}/>

                        <span className="main-temperature"
                              id="main-temperature">{Math.round(props.data.temperature)} </span>
                        <span className="units">
                          <a href="/" id="celsius-link" className="active">°C</a>|<a href="/"
                                                                                     id="fahrenheit-link">°F</a>
                        </span>
                    </div>
                </div>

                <div className="col-2"></div>

                <div className="col-5">
                    <div className="row">
                        <div>
                            <span className="float-left">Feels like</span>
                            <span id="feels-like-value"
                                  className="float-right">{Math.round(props.data.feelslike)}°</span>
                        </div>
                        <div>
                            <span className="float-left">Wind</span>
                            <span id="wind" className="float-right">{props.data.wind}km/h E</span>
                        </div>
                        <div>
                            <span className="float-left">Pressure</span>
                            <span id="pressure" className="float-right">{props.data.pressure}hPa</span>
                        </div>
                        <div>
                            <span className="float-left">Humidity</span>
                            <span id="humidity" className="float-right">{props.data.humidity}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}