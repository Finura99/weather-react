import React from "react";
import axios from "axios";




function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=96d9da1c92f2a9f62c42724f37f85357`


  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>
              25°c
            </h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div classname="bottom">
          <div className="feels"> 
            <p>24°</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
