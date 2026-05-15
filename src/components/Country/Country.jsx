import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry}) => {
    console.log(country)
    const {name, flags,population,area,cca3}=country
    const [visited, setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(!visited)
    }
    console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited  && 'visited'}`}>
           <h3 style={{color: visited ? 'Purple' : 'white'}}>name: {name?.common || "Missing"}</h3> 
           <img src={flags.png} alt="img" />
           <p>Population: {population}</p>
           <p><small>area: {area}</small></p>
           <p>Code: {cca3}</p>
           <button>Mark Visited</button>
           <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
           {visited ? 'I have visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;