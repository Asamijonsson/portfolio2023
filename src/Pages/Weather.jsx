import style from "./Weather.module.css";

const weather =() =>{
const apiKey = process.env.API_KEY
console.log(apiKey)
return (
<div className={style.container}>
    <div className={style.topbar}>
        <input type="text"/>
        <div>

        </div>
    </div>
    <div className={style.weatherImg}>

    </div>
    <div className={style.weatherTemp}>24°C</div>
    <div className={style.weatherLocation}>Malmö</div>
    <div className={style.dataContainer}>
        <div className={style.element}>
            <div className={style.data}>
                <div className={style.humidityPercent}>64%</div>
                <div className={style.text}>Humidity</div>
            </div>
        </div>
        <div className={style.element}>
            <div className={style.data}>
                <div className={style.humidityPercent}>18 km/h</div>
                <div className={style.text}>Wind Speed</div>
            </div>
        </div>
    </div>
</div>
)
}

export default weather