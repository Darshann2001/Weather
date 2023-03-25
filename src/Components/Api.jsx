import React, { useState, useEffect } from 'react';

const Api = () => {

    const [data, setData] = useState(null);
    const [location, setLocation] = useState('Pune');
    const [weather, setWeather] = useState('cloud');
    const [wind, setWind] = useState('2.3');

    useEffect(() => {
        const fetcher = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f5a8ab41408c5c68afe6ea9fed4c9277`;
            const response = await fetch(url);
            const resJSON = await response.json()
            // console.log(resJSON);
            setData(resJSON.main);
            setWeather(resJSON.weather[0]);
            setWind(resJSON.wind);
        }
        fetcher();
    }, [location]);



    return (
        <div className='parent'>
            <div className="container">
                <div className="link">
                    <a href="https://my-portfolio-reactdmk.netlify.app/" target='_blank'>Connect!</a>
                </div>
                <div className="input">
                    <input type="search" className='input-text'
                        onChange={(event) => setLocation(event.target.value)}
                    />
                </div>

                {!data ? (
                    <p className='nodata'>Data not found</p>
                ) :
                    <>
                        <div className="top">
                            <div className="location">
                                <p>{location}</p>
                            </div>
                            <div className="temp">
                                <h2>
                                    {data.temp} °C
                                </h2>
                            </div>
                            <div className="description">
                                <p>{weather.main}</p>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="feels">
                                <p>{data.feels_like}</p>
                                <span>feels like</span>
                            </div>
                            <div className="humidity">
                                <p>{data.humidity}</p>
                                <span>Humidity</span>
                            </div>
                            <div className="wind">
                                <p>{wind.speed}km</p>
                                <span>Wind speed</span>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Api;
