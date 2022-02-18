import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weather, setWeather] = useState({ready: false});

    function handleResponse(response) {
        setWeather({
            ready: true,
            city: response.data.name,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            imgUrl: "https://www.freeiconspng.com/thumbs/cat-png/cat-face-png-31.png",
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            pressure: response.data.main.pressure,
            feelslike: response.data.main.feels_like,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weather.ready) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form className="d-flex" id="search-city-form" onSubmit={handleSubmit}>


                            <input onChange={handleCityChange}
                                   id="city-input"
                                   className="form-control me-2"
                                   type="search"
                                   placeholder="Search by city"
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
                <WeatherInfo data={weather}/>
            </div>

        );
    } else {
        let apiKey = "c0d89ac9b3417fc5f06ed2c347a7a787";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading.."
            ;
    }
}
