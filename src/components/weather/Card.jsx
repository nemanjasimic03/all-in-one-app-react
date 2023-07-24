import search from "../../assets/search.png"
import React, {useEffect, useState} from 'react'
import styles from "./Card.module.css"
let link = " https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";


const Card = () => {

  let apiKey ="b8389f2f076f314b8f0d1a88e5b1a48b";
  const [data,setData] = useState({});
  const [location, setLocation]= useState("Belgrade");

    async function getData(){
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
      let responseJSON = await response.json();
      setData(responseJSON);
      console.log(responseJSON)
    }

    useEffect(()=>{
      getData();
    },[])

    function handleClick(){
      getData();
    }
    function handleEnter(e){
      if(e.key=="Enter"){
        getData();
      }
    }
    
    return (
        <>
      
          <div className={`${styles.card} flex-col flex text-white`}>
            <div className="flex-row flex justify-center align-middle">
              <input
                type="text"
                placeholder="Enter the city"
                onChange={(e)=>setLocation(e.target.value)}
               onKeyPress={handleEnter}
               className={styles.input}
          
              />
              
              <img
                src={search}
                className={styles.search}
                onClick={handleClick}
              />
            </div>
            <div className="flex flex-col justify-center align-middle">
              {data.name ? <h2>Weather in: {data.name}</h2> : <h2>Invalid city</h2>}
              
             {data.main && <h1>{data.main.temp} °C</h1>}
              <img  
                src={data.weather && `http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt=""
                className={styles.weatherImg}
                // onClick={setLocation(location)}
              />
              <div className="flex-col flex gap-[5px] justify-center align-middle">
               {data.wind && <h3>Wind: {data.wind.speed} km/h</h3>}
              {data.main && <h3>Humidity: {data.main.humidity} %</h3>}
              {data.main && <h3>Pressure: {data.main.pressure} mb</h3> }
              </div>
            </div>
          </div>
        </>
      );
}

export default Card;