import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";


export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;


    let getWeatherInfo = async () => {
      try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result ={
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description, 
        };
        console.log(result);
        return result;
      }catch(err){
        throw err;
      }
        
    }


    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
      try{
        event.preventDefault();
        console.log(city);
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setCity("");
      }catch(err){
        setError(true);
      }
    };

  return (
    <div className="search-box">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city" 
          label="City Name" 
          variant="standard" 
          value={city} 
          onChange={handleChange} 
          required
        />
        <br /><br /><br /><br />
      <Button variant="contained" type="submit">Search</Button>
      {error && <p style={{color: "red"}}>No Such Place exists </p>}
      </form>
      <br />
    </div>
  )
}
