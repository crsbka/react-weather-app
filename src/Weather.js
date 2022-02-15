import React from "react";
import "./Weather.css";



export default function Weather() {
    let weatherData = {
        city: "Toronto",
        temperature: -10,
        date: "Monday 11:00",
        description: "Sunny",
        imgUrl: "https://uxwing.com/wp-content/themes/uxwing/download/27-weather/day-sunny.png",
        humidity: 68,
        wind: 5,
        pressure: 1005,
        feelslike: -5
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form className="d-flex" id="search-city-form">
                        <input
                            id="city-input"
                            className="form-control me-2"
                            type="search"
                            placeholder="Enter your city"
                            aria-label="Search"
                            autoComplete="on"
                        />
                        <button
                            className="btn btn-outline-success search-btn"
                            id="search-button"
                            type="submit">
                            Search
                        </button>
                        <button
                            className="btn btn-outline-primary current-btn"
                            id="current-button"
                            type="submit">
                            Current
                        </button>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h2 className="city-name">{weatherData.city}</h2>
                </div>
            </div>

            <div className="row">

                <div id="current-info" className="col-5">

                    <div id="current-date">{weatherData.date}</div>
                    <div id="weather-description" className="cond"></div>
                    <img src={weatherData.imgUrl} alt="sun" id="main-icon"/>

                    <div className="float-left" id="weather-temp">
                        <span className="main-temperature" id="main-temperature">{weatherData.temperature} </span>
                        <span className="units">
                          <a href="/" id="celsius-link" className="active">°C</a>|<a href="/" id="fahrenheit-link">°F</a>
                        </span>
                    </div>
                </div>

                <div className="col-7">
                    <div className="row" id="weather-info">
                        <div className="col-5">
                            <span className="float-left">Feels like</span>
                            <span id="feels-like-value" className="float-right">{weatherData.feelslike}°</span>
                        </div>
                        <div className="col-5">
                            <span className="float-left">Wind</span>
                            <span id="wind" className="float-right">{weatherData.wind}km/h E</span>
                        </div>
                        <div className="col-5">
                            <span className="float-left">Pressure</span>
                            <span id="pressure" className="float-right">{weatherData.pressure}hPa</span>
                        </div>
                        <div className="col-5">
                            <span className="float-left">Humidity</span>
                            <span id="humidity" className="float-right">{weatherData.humidity}%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer">This project was coded by <a href="https://www.linkedin.com/in/kristina-laktiushkina/">Kristina
                Laktiushkina</a> and is
                <a href="https://github.com/crsbka/react-weather-app"> open-sourced on GitHub</a>
            </div>
        </div>
    );
}