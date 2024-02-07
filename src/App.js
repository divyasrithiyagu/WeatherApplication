import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import  WeatherApp  from './Components/WeatherApp/WeatherApp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/sign' element={<SignUp/>}/>
          <Route path='/home' element={<WeatherApp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*import React, { useState } from 'react'
import Axios from "axios"
import './App.css'

const KEY='15b528696d6a16a8abd93a91b6b8d5ce';
//const city="London"

const App = () => {


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
    <div className='App'>
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

export default App*/



