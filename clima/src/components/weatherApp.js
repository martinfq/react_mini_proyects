import { useState } from 'react';
import WeatherForm from './weatherForm';
export default function WeatherApp(){
    const [weather, setWeather] = useState(null);

    async function loadInfo(city = 'london'){
        try{
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
            );

            const json = request.json();
            console.log(json);
        }catch(error){
            console.error(error);
        }
    }
    
    function handleChangeCity(city){
        setWeather(null);
        loadInfo();
    }
    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />
            <div>Info</div>
        </div>
    );
}