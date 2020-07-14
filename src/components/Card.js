import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './Card.scss'

import nublado from '../assets/images/nublado.svg'

function Card() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);


  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data);
    console.log(res.data)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  if (location === false) {
    return (
      <Fragment>
        <h1>Você precisa habilitar a sua localização</h1>
      </Fragment>
    )
  } else if (weather === false){
    return (
      <div id="Card">
        <h1>Carregando o clima...</h1>
      </div>
    )
  } else {
    return (
      <div id="Card">
          <h2>{weather['name']}</h2>
          <h3>Lon {weather['coord']['lon']} | Lat {weather['coord']['lat']}</h3>
          <div className="image">
             <img src={nublado} alt="Imagem-Tempo"/>
          </div>
          <div className="temperature">
             <h2>{weather['weather'][0]['description']}</h2>
             <div className="infos">
                <h1>{weather['main']['temp']}º</h1>
                <div className="maxMin">
                   <p>Máx: {weather['main']['temp_max']}º</p>
                   <p>Min: {weather['main']['temp_min']}º</p>
                </div>
             </div>
          </div>
          <div className="moreInfos">
             <div>
                <p>{weather['main']['humidity']}%</p>
                <p className="subtitulo">umidade</p>
             </div>
             <div>
                <p>{weather['main']['pressure']} hpa</p>
                <p className="subtitulo">pressao</p>
             </div>
             <div>
                <p>{weather['wind']['speed']} km/h</p>
                <p className="subtitulo">ventos</p>
             </div>
          </div>
       </div>
      
    );
  }
}



export default Card;
