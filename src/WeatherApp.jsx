import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.05,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    console.log(weatherInfo);
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather Web App</h2>
            <SearchBox updateInfo={updateInfo}/>
             {/* Pass weatherInfo as the info prop */}
             <InfoBox info={weatherInfo} />
        </div>
    );
}