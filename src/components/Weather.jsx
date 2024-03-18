import style from "./Weather.module.css";

const weather = () => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const search = async () => {
        const element = document.getElementById("cityInput")
        if (!element || element.value === "") {
            return 0;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&appid=${apiKey}`;
        const response = await fetch(url)
        const data = await response.json();
        console.log(data)
        const humidity = document.getElementById("humiditiyPercent")
        const wind = document.getElementById("windRate")
        const temprature = document.getElementById("weatherTemp")
        const location = document.getElementById("weatherLocation")

        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "km/h";
        temprature.innerHTML = (data.main.temp - 273.15).toFixed(2) + "°C";
        location.innerHTML = data.name;



    }



    return (
        <div className={style.container}>
            <p className={style.text}>Check weather in your city!</p>
            <div className={style.topbar}>
                <input type="text" id="cityInput" className={style.cityInput} />
                <button className={style.search} onClick={() => { search() }}>
                    Search
                </button>
            </div>
            <div className={style.weatherImg}>

            </div>
            <div id="weatherTemp" className={style.weatherTemp}>--°C</div>
            <div id="weatherLocation" className={style.weatherLocation}>City</div>
            <div className={style.dataContainer}>
                <div className={style.element}>
                    <div className={style.data}>
                        <div id="humiditiyPercent" className={style.humidityPercent}>--%</div>
                        <div className={style.text}>Humidity</div>
                    </div>
                </div>
                <div className={style.element}>
                    <div className={style.data}>
                        <div id="windRate" className={style.windRate}>18 km/h</div>
                        <div className={style.text}>Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default weather