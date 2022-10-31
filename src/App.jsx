import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'

function App() {

  const [weather, setWeather] = useState({});
  const [isCelcius, setIsCelcius] = useState(true);


  useEffect(() => {

    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8ac55c40c16dc331fb466a967077a11c`)
        .then(res => setWeather(res.data));
    }
    navigator.geolocation.getCurrentPosition(success);
  }, [])


  console.log(weather);

  let fundTime = weather.weather?.[0].icon;
  let linkFund = "";
  let color="";
  

  switch (fundTime) {
    case '01d':
      color='black',
      linkFund = 'https://image.freepik.com/foto-gratis/cielo-despejado-sol-brillante-rayos-atmosfera-debajo-hay-nubes-suaves-esponjosas_165577-1.jpg'
      break;
    case '01n':
      color='white',
      linkFund = 'https://cdn.elnacional.com/wp-content/uploads/2019/09/Luna-Foto-Getty-Images.jpg'
      break;
    case '02d':
      color='black',
      linkFund = 'https://image.ondacero.es/clipping/cmsimages02/2013/09/22/32778743-029D-46FB-9BDD-CF6362348FFC/27.jpg'
      break;
    case '02n':
      color='white',
      linkFund = 'https://4.bp.blogspot.com/-aKTruiCxe-0/Uq8vHwgMHzI/AAAAAAAAAE8/VDxNrNePCkY/s1600/hdr+92.jpg'
      break;
    case '03d':
      
      linkFund = 'https://th.bing.com/th/id/OIP.c16i3w_ilKPTqyrB01Q8agHaE7?pid=ImgDet&rs=1'
      break;
    case '03n':
      color='white',
      linkFund = 'https://www.comodicelacancion.com/wp-content/uploads/2009/01/en-el-silencio-de-la-noche-450x300.jpg'
      break;
    case '04d':
      
      linkFund = 'https://th.bing.com/th/id/R.fb2d751d0ae1b2d4ca133ccaee6f23ce?rik=k0AudbZrT1Fe1g&pid=ImgRaw&r=0'
      break;
    case '04n':
      color='white',
      linkFund = 'https://c0.klipartz.com/pngpicture/2/240/gratis-png-nubes-blancas-en-la-noche-noche-cielo-luz-de-la-luna-escritorio-noche.png'
      break;
    case '09d':
      color='black',
      linkFund = 'https://th.bing.com/th/id/R.3db43be16783ca45c883703e9aaf953c?rik=5kNKKcgec1p6fQ&riu=http%3a%2f%2ffmchalet.org%2fwp-content%2fuploads%2f2019%2f10%2fScreenshot_13-1.png&ehk=KCd6pmNtoAQ5VN57HcMx97D%2fHAQggTxb2Tp5kOQaDmo%3d&risl=&pid=ImgRaw&r=0'
      break;
    case '09n':
      color='white',
      linkFund = 'https://th.bing.com/th/id/OIP.HVrjZrYDpwuJwN27vwnd_AHaEK?pid=ImgDet&rs=1'
      break;
    case '10d':
      color='black',
      linkFund = 'https://th.bing.com/th/id/R.ca89090656591317e3e6065220055e8f?rik=Mmnnpow8RSxEew&riu=http%3a%2f%2fparquesalegres.org%2fwp-content%2fuploads%2f2018%2f06%2flluvia-4.jpg&ehk=e%2ftgKF%2fQoKunBEWsnlUYwUot5TvfABKaBijegoj97BU%3d&risl=&pid=ImgRaw&r=0'
      break;
    case '10n':
      color='white',
      linkFund = 'https://st2.depositphotos.com/1445720/8506/i/450/depositphotos_85062730-stock-photo-charles-bridge-at-rainy-night.jpg'
      break;
    case '11d':
      color='black',
      linkFund = 'https://th.bing.com/th/id/R.24fc03a99f4f3a1040aac768de720c12?rik=WztDnuq69VUswA&pid=ImgRaw&r=0'
      break;
    case '11n':
      color='white',
      linkFund = 'https://th.bing.com/th/id/R.021a0ae026b7986b47077df3394957b0?rik=DOr4UA9csclypw&riu=http%3a%2f%2fwww.descargarfondos.com%2fi%2ffondo-noche-de-tormenta.jpg&ehk=mW4MRkYH8kZHCKNIchAEUNsTRArlhptHN5dXikDcjtY%3d&risl=&pid=ImgRaw&r=0'
      break;
    case '13d':
      color='black',
      linkFund = 'https://th.bing.com/th/id/R.d38caba9c9b6c609cec7cee0df2d0aeb?rik=%2byTgtu%2felbi5qA&pid=ImgRaw&r=0&sres=1&sresct=1'
      break;
    case '13n':
      color='white',
      linkFund = 'https://th.bing.com/th/id/R.dd8ccc08c80077aed4236fc61ee721e8?rik=AIFwxjPVfFnIHg&pid=ImgRaw&r=0'
      break;
    case '50d':
      color='black',
      linkFund = 'https://th.bing.com/th/id/R.59eae0a04268a6f532f68948024284b3?rik=4Mm0%2ftAhzL16mQ&pid=ImgRaw&r=0'
      break;
    case '50n':
      color='white',
      linkFund = 'https://th.bing.com/th/id/OIP.tFGojSEkz90fuJnMf7vdpQHaE7?pid=ImgDet&rs=1'
      break;
  }
  document.body.style = `background-image: url(${linkFund}) `


  return (
    <div className="App" style={{color: color}}  >
      <div>
        <h1>Weather App</h1>
        <p>Ciudad {weather.name}, {weather.sys?.country}</p>
      </div>
      <div className='div'>
        <div>
          <img  src={` http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
          <p style={{fontSize: '30px'}}>
            {isCelcius ? Math.floor((weather.main?.temp) - 273.15) : Math.floor(((weather.main?.temp) - 273.15) * 9 / 5 + 32)} °{' '}
            {isCelcius ? 'celcius' : 'farenheit'}
          </p>
        </div>
        <div className='items'>
          <h3>"scattered clouds"</h3>
          <p><i className="fa-solid fa-wind"></i>  Wind speed: {weather.wind?.speed} km/h</p>
          <p><i className="fa-solid fa-cloud"></i>  Clouds: {weather.clouds?.all} %</p>
          <p><i className="fa-solid fa-droplet"></i>  Humidity: {weather.main?.humidity}</p>
          <p><i className="fa-solid fa-temperature-three-quarters"></i>  Preasure: {weather.main?.pressure} mb</p>
        </div>
      </div>
      <div>
        <button onClick={()=>setIsCelcius(!isCelcius)}
        >Degrees °F/°C</button>
      </div>
    </div>
  )
}

export default App






