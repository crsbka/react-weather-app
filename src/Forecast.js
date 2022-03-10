import React, {useState, useEffect} from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }


    if (loaded) {
        return (
            <div className="Forecast">
                <div className="row">

                    {forecast.map(function (dailyForecast, index) {
                        if (index < 6) {
                            return (
                                <div className="col" key={index}>
                                    <ForecastDay data={dailyForecast}/>
                                </div>
                            );
                        }else{
                            return null;
                        }
                    })}
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