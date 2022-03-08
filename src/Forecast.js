import React, {useState} from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);


    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }


    if (loaded) {
        return (
            <div className="Forecast">
                <div className="row">
                    <div className="col-2">
                        <ForecastDay data={forecast[0]}/>
                    </div>
                </div>
            </div>
        )

    } else {
        let apiKey = "c0d89ac9b3417fc5f06ed2c347a7a787";
        let lat = props.coordinates.lat;
        let lon = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;

    }


}