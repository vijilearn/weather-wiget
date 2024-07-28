
import SearchBox from "./searchBox";
import InfoBox from "./infoBox"
import { useState } from "react";

export default function weatherApp(){

   const [weatherInfo,setWeatherInfo] = useState({
    city:"Delhi",
    temp: 32,
    temp_min:25,
    temp_max:32,
    humidity:60,
    feelsLike:35,
    weather:"haze",
   });

let updateInfo = (newInfo) =>{
   setWeatherInfo(newInfo);
}

    return (
    <div>
       <h2>Weather App</h2>
       <SearchBox updateInfo={updateInfo}/>
       <InfoBox Info={weatherInfo}/>
    </div>
    )
}
