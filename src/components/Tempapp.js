import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp =()=>{

    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("");

    useEffect(()=>
    {
        const fetchApi=async()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fd6421feab61c278ea505bfc8320d9de`;
        const response=await fetch(url);
        const resjson=await response.json();
        setcity(resjson.main);
        
    };
       
    fetchApi();
},[search])// include search in the dependencies array to fetch data when search changes



return (
  <>
  
    <div className="box">
        <div className="inputData">
          - Enter the Place Name Here :- <i class='fas fa-hand-point-down'  style={{fontSize:'40px',color:'black'}}></i><br /><input 
            type="search"
            className="inputFeild" 
            id="input"
            placeholder="Type Here . . . . ."
            value={search}
            onChange={(event)=>{setsearch(event.target.value)}}/>
    </div>
<div className="underline"></div>


{!city ? (
    <p className="error_msg"> Note  Oops Data Not Found . . .</p>
):(
  <div>
  
  
  <div className="info">
            
            <h2 className="location">
            <i id="logo" className='fas fa-sun' style={{color:'yellow'}}></i> - {search} </h2>
            <h1 className="temp"><i class='fas fa-temperature-high' style={{fontSize:'50px',color:'red'}}></i> - {city.temp}°Cel </h1>
            <h3 className="tempmin_max"> <i class='fas fa-wind' style={{fontSize:'50px',color:'white'}}></i> - Min : {city.temp_min}°Cel || Max : {city.temp_max}°Cel</h3>
  </div>
  </div>

)}
    </div>
  
  </>
  );
};

export default Tempapp;
