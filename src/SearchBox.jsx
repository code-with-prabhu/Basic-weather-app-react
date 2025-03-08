import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import "./SearchBox.css";
import { useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;;

export default function SearchBox({ update }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRes = await response.json();
      let result = {
        city: city,
        temp: jsonRes.main.temp,
        min_temp: jsonRes.main.temp_min,
        max_temp: jsonRes.main.temp_max,
        feelsLike: jsonRes.main.feels_like,
        humidity: jsonRes.main.humidity,
        description: jsonRes.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };
  let handelCity = (e) => {
    setCity(e.target.value);
  };
  let handelSearch = async (e) => {
    e.preventDefault();
    try {
      console.log(city);
      let info = await getWeatherInfo();
      update(info);
      setCity("");
    } catch (error) {
      setError(true);
      setCity("");
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handelSearch}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handelCity}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
        {error && <Alert severity="error">Place doesn't exist in our API</Alert>}
    </div>
  );
}
