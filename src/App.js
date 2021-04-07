import React from 'react';
import logo from './logo.svg';
import './App.css';
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";


function App() {
  const [city,setCity] = React.useState("");
  const[cityWeather,setCityWeather] = React.useState({});

  const fechCityWeather =()=> {
    fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=678fd9c8e7649b6bc66a8f6e86ad22b2`
    ).then((res)=>res.json())
     .then((result)=>{
        // console.log("result is result",result);
        setCityWeather(result);
     });
  };
  return (

    <div className="App">
      <CityInput city={city} setCity={setCity} fechCityWeather={fechCityWeather} />
      {/* use city weather data to show it  on the screen */}
      <CityWeather cityWeather={cityWeather}/>
    </div>
  );
}

export default App;
