import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';


const APIKey= 'f3b8ae24b187888ff0b0be2ef6f6e4a2'

class App extends Component {
  state = {
    value:"",
    date:"",
    city: "",
    sunrise:"",
    sunset: "",
    temp:"",
    pressure:"",
    wind:"",
    err:"",

  }
  
    
handleInputChange = e =>{
  this.setState({
    value: e.target.value
  })
}
handleCitySubmit= e =>{
  e.preventDefault()

// eslint-disable-next-line no-template-curly-in-string
const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

fetch (API)
.then(response =>{
  if(response.ok){
return response

  }
  throw Error("Nie udało się")
})
.then(response =>response.json())
.then(data =>{
  const time = new Date().toLocaleDateString()
  this.setState(state =>({
    err: false,
    date: time,
  
    sunrise:data.sys.sunrise,
    sunset: data.sys.sunset,
    temp: data.main.temp,
    pressure:data.main.pressure,
    wind:data.wind.speed,
    city: this.state.value,
    

  }))
})
.catch(err => {
  console.log(err);
this.setState(prevState =>({
  
  err :true,
  city: prevState.value
}))
})


}
render() {
  return (
    <div className="App">
      <Form 
      value ={this.state.value } 
      change= {this.handleInputChange}
      submit={this.handleCitySubmit}
      
      />
      <Result weather ={this.state} />


    </div>
  );
}
}
export default App;
