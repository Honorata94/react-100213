import React from 'react';
import './Result.css'



const Result = props =>{
    const { date, city, temp, sunrise, sunset, pressure, wind, err,} = props.weather;

let content = null;

if(!err && city ){
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content= (
        <div> 
        <h3>Wyszukiwanie dla <em>{city}</em> </h3>
        <h4> Dzień: {date}</h4>
        <h4> Aktualna temperatura: {temp} &#176;C</h4>
        <h4>Wschód słońca o {sunriseTime}</h4>
        <h4>Zachód słońca o {sunsetTime}</h4>
        <h4>Aktualna siła wiatru {wind} m/s</h4>
        <h4>Aktualne ciśnienie {pressure} hPa</h4>
        </div>
    )
}

    return (
    <div className= "result">
        {err? `Nie znaleziono miejscowości ${city}. Spróbuj ponownie` : content}
    </div>
 );

}
export default Result;