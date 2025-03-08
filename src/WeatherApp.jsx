import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import '@fontsource/roboto/300.css';

export default function WeatherApp() {
    const [info, setInfo] = useState({
        city: "Gunupur",
        temp: 30.00,
        min_temp: 25.00,
        max_temp: 35.00,
        feelsLike: 27.00,
        humidity: 25,
        description: "Clear Sky"
});

let updateInfo = (result) => {
    setInfo(result);
}
  return (
    <div style={{textAlign:"center"}}>
    <h1> Weather app</h1>
      <hr />
      <SearchBox update={updateInfo}/>
      <InfoBox info={info}/>
    </div>
  );
}
