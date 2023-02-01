import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
//added a comment
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2ccfff3557c9a0db8fc7b4c1471f18bd`;
  return (
    <div className="app">
      <div className="search">
        <div>It's Junaid here to serve you! </div>
        <br />
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location Mr Asjad"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {
              data.weather ? <p>{data.weather[0].main}</p> : null //why[0] here ?
            }
          </div>
        </div>
        {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like.toFixed()}°C</p>
            ) : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity.toFixed()}%</p> : null}

            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed.toFixed()}MPH</p> : null}

            <p>Wind speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
