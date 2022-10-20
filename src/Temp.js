import React, { useEffect, useState } from "react";
import './mytemp.css'
function Temp() {

    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("mumbai");

    useEffect(() => {
        const getapi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=52644de103d3f9bafd974739cf0eff0d`
            const response = await fetch(url);
            const resjson = await response.json();
            console.log(resjson);
            setcity(resjson.main);
        }
        getapi();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="data">
                    <h1 className="top-heading"> ENTER CITY</h1>
                    <input className="inputtext" value={search} type="text" onChange={(event) => {
                        setsearch(event.target.value)
                    }} />
                </div>
                {!city ? (
                    <p className="errormsg">INVALID CITY NAME !!</p>
                ) : (
                    <>
                        <div className="info">
                            <h1 className="h1style">
                                {search}
                            </h1>
                            <h1 className="main-temp">
                                {city.temp}
                            </h1>
                            <h2 className="otherdata">
                                Min :{city.temp_min}

                            </h2>
                            <h2 className="otherdata">

                                max : {city.temp_max}
                            </h2>
                            <h2 className="otherdata">
                                Feels Like : {city.feels_like
                                }
                            </h2>
                            <h2 className="otherdata">
                                Humidity:{city.humidity}
                            </h2>
                        </div>
                    </>
                )}

            </div>
        </>
    )
}

export default Temp