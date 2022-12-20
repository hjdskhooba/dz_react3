import { useState } from "react";
import './App.css'

const App = () => {
  const [city, setCity] = useState('')
  const [datas, setWeather] = useState('')
  const [like, setLike] = useState('')
  const [temp, setTemp] = useState('')
  const [country, setCountry] = useState('')

  function inputChangeHandler(e) {
    setCity(e.target.value)
  }
  function formatDate(date) {
    let dd = date.getDate();
    dd < 10 ? dd = '0' + dd : dd;
    
    let mm = date.getMonth() + 1;
    mm < 10 ? mm = '0' + mm : mm;
    
    let yy = date.getFullYear() % 100;
    yy < 10 ? yy = '0' + yy : yy;
    
    let hh = date.getHours()
    hh < 10 ? hh = '0' + hh : hh;
    
    let mn = date.getMinutes()
    mn < 10 ? mn = '0' + mn : mn;
    
    //return '20' + yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mn + ':00';
    return dd + '.' + mm + '.20' + yy + ' ' + hh + ':' + mn;
    }
    let check = 1;
  function getWeather(e){
    check = 2;
    e.preventDefault()
  fetch(`https://api.openweathermap.org/data/2.5/weather?appid=74433acd9506694b0e14e9471ad669a0&q=${city}&units=metric`)
    .then(res => res.json())
    .then(datas => {
      setWeather(datas)
      setCountry(datas.sys.country)
      setTemp(datas.main.temp)
      setLike(datas.main.feels_like)
    })
  }
  ////////////////////////////////////////////////////////////////////////////////////////////// Zadacha sdelat spisok vsey infy s pomoshy metoda weather.map chtoby ne ispolzovat useState, ya zdelayu eto srazu posle ochistki pk!!!
  return (
    <>
    <form className="gen" onSubmit={getWeather}>
      <input className="input" type="text" placeholder="The weather in.." onChange={inputChangeHandler}/>
      <button>OK</button>
      <div className="weather-info">
        <div className="fb">City: {city}</div>
        <div className="fb">C:{country}</div>
        <div className="fb">Temp: {temp}°C</div>
        <div className="fb">Feels like: {like}°C</div>
        <div className="fb">{check == 1 ? formatDate(new Date) : null}</div>
      </div>
    </form>
    </>
  )
}

export default App;