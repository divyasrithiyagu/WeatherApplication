/*import React, { useState } from 'react'
import Axios from "axios"
import './WeatherApp.css'

const KEY='15b528696d6a16a8abd93a91b6b8d5ce';
//const city="London"

const WeatherApp = () => {

  const [city,setCity] = useState("");
  const [data,setData] = useState();

  const fetchData = async () => {
    try{
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
      setData(response.data);
    }
    catch(err)
    {
      alert('Please Enter the City Name Correctly');
    }
    
  }

  return (
    <div>
           <h1 className='tilte'>Weather App</h1>
      <div className='input-container'>
        <input
        type='text'
        className='input'
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder='Enter the city name'
        />
        <button className='button' onClick={fetchData}>Fetch</button>

      </div>

      <div>
        {data && (
          <div className='container'>
             <h1 className='city-name'>{data.name}, {data.sys.country}</h1>
             <div className='weather-info'>
               <div className='temp'>{Math.round(data.main.temp)} C</div>
               <div className='coordinate'>
                <div>Lat - {data.coord.lat}</div>
                <div>Lon - {data.coord.lon}</div>
               </div>
             </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default <WeatherApp></WeatherApp>

*/


import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './WeatherApp.css';

const KEY = '15b528696d6a16a8abd93a91b6b8d5ce';

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const [currentTime, setCurrentTime] = useState(new Date()); // State to store current date and time

  const fetchData = async () => {
    try {
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
      setData(response.data);
    } catch (err) {
      alert('Please Enter the City Name Correctly');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date()); // Update the current time every second
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString(); // Format the time as a string
  };

  const formatDate = (date) => {
    return date.toLocaleDateString(); // Format the date as a string
  };

  return (
    <div>
      <h1 className='title'>Weather App</h1>
      <div className='date-time'>{formatDate(currentTime)} {formatTime(currentTime)}</div> {/* Display live date and time */}
      <div className='input-container'>
        <input
          type='text'
          className='input'
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder='Enter the city name'
        />
        <button className='button' onClick={fetchData}>Fetch</button>
      </div>

      <div>
        {data && (
          <div className='container'>
            <h1 className='city-name'>{data.name}, {data.sys.country}</h1>
            <div className='weather-info'>
              <div className='temp'>{Math.round(data.main.temp)} °C</div>
              <div className='coordinate'>
                <div>Lat - {data.coord.lat}</div>
                <div>Lon - {data.coord.lon}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
