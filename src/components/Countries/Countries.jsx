import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,cca3')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(country=><Country 
                    key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;