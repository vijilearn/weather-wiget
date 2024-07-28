
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';

export default function searchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError]= useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="d77c8ccd4cdf845a30dd78f7555455d6";

    let getWeatherInfo = async() => {
       
       try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city:city,
            temp: jsonResponse.main.temp,
            temp_min:jsonResponse.main.temp_min,
            temp_max:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
       
        return result;
    } catch(err) {
        throw err;
    }
    }

   
    let handleChange = (event) =>{
       setCity(event.target.value);
    };

    let handleSubmit = async(event) =>{
      try{
          event.preventDefault();
          setCity("");
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo);
      } catch(err){
        setError(true);
      }
    }

    return (<div className='searchBox'>
          <form onSubmit={handleSubmit}>
          <TextField id="city" 
          label="Select City" 
          variant="outlined"  
          required
          value={city}
          onChange={handleChange}/>
          <br></br>
          <br></br>
          <Button variant="outlined" type="submit">Search</Button>
          {error && <p>No Such place available</p>}
        </form>
    </div>)
}