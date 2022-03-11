import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-12">
                    <h2 className="city-name">{props.data.city}</h2>
                </div>
            </div>

            <div className="description row">

                <div className="conditions col-5">


                    <FormattedDate date={props.data.date}/>

                    <div className="weather-description text-capitalize">{props.data.description}</div>


                    <div className="float-left">

                        <WeatherIcon code={props.data.icon} size={62}/>

                        <WeatherTemperature celsius={props.data.temperature}/>

                    </div>
                </div>

                <div className="col-2"></div>

                <div className="col-5">
                    <div className="description row">
                        <div>
                            <span className="details float-left">Feels like</span>
                            <span id="details-value-feels-like"
                                  className="float-right">{Math.round(props.data.feelslike)}°</span>
                        </div>
                        <div>
                            <span className="details float-left">Wind</span>
                            <span id="details-value-wind" className="float-right">{props.data.wind}km/h E</span>
                        </div>
                        <div>
                            <span className="details float-left">Pressure</span>
                            <span id="details-value-pressure" className="float-right">{props.data.pressure}hPa</span>
                        </div>
                        <div>
                            <span className="details float-left">Humidity</span>
                            <span id="details-value-humidity" className="float-right">{props.data.humidity}%</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}