import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries]=useState([])
    const [visitedCountries, setVisitedCountries]=useState([])
    const [visitedFlags, setVisitedFlags]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,cca3,population,area')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    const handleVisitedCountry= country =>{
        
        const newVisitedCountry =[...visitedCountries,country]
setVisitedCountries(newVisitedCountry)
    }
    const handleVisitedFlags= flag =>{
        const newVisitedFlags =[...visitedFlags,flag]
setVisitedFlags(newVisitedFlags)
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>

                <ul>
{
    visitedCountries.map((country,index)=><li key={`${index}country.cca3`}>{country.name.common}</li>)
    
}
                </ul>
            </div>
            <div className="flag-container">
               
                {
                visitedFlags.map((flag,index)=> <img key={index} src={flag} alt="" />)
}
            </div>
            <div className="country-container">
                {
                countries.map(country=><Country 
                    key={country.cca3}
                    handleVisitedCountry ={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>) 
            }
            </div>
        </div>
    );
};

export default Countries;