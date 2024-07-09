import { useState } from 'react';
import style from "./Weather.module.css";

const Weather = () => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

   const search = async (event) => {
        event.preventDefault();
        if (!city) {
            setError("Please enter a city name.");
            return;
       
        }
           setWeatherData(null);
           setError("");
      
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError("City not found. Please try again.");}
               };

    return (
        <div className={style.container}>
            <p className={style.text}>Do you want to check the weather in your city or your destination? You can do it here!</p>
                 <form className={style.topbar} onSubmit={search}>
                    <input
                        type="text"
                        id="cityInput"
                        className={style.cityInput}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button type="submit" className={style.search}>Search</button>
                </form>
                      <div className={style.weatherImg}></div>
            { error ? (
                <p>{error}</p>
            ) : 
            
            weatherData ? (
                <div>
                    <div id="weatherTemp" className={style.weatherTemp}>
                        {(weatherData.main.temp - 273.15).toFixed(1) + "°C"}
                    </div>
                    <div id="weatherLocation" className={style.weatherLocation}>
                        {weatherData.name}
                    </div>
                    <div className={style.dataContainer}>
                        <div className={style.element}>
                            <div className={style.data}>
                                <div id="humidityPercent" className={style.text}>
                                    {weatherData.main.humidity + "%"}
                                </div>
                                <div className={style.text}>Humidity</div>
                            </div>
                        </div>
                        <div className={style.element}>
                            <div className={style.data}>
                                <div id="windRate" className={style.text}>
                                    {weatherData.wind.speed + " km/h"}
                                </div>
                                <div className={style.text}>Wind Speed</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : city ? (
                <p>City not found. Please try again.</p>
            ) : null}
        </div>
    );
};

export default Weather;
