import { useState } from 'react';
import './Country.css'
import CountryDetail from '../Countries/CountryDetail/CountryDetail';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
   
    const {name, flags,population,area,cca3}=country
    const [visited, setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(!visited)
    }
    const passWithParamas=()=> handleVisitedCountry(country)
    
    return (
        <div className={`country ${visited  && 'visited'}`}>
           <h3 style={{color: visited ? 'Purple' : 'white'}}>name: {name?.common || "Missing"}</h3> 
           <img src={flags.png} alt="img" />
           <p>Population: {population}</p>
           <p><small>area: {area}</small></p>
           <p>Code: {cca3}</p>
           <button onClick={passWithParamas}>Mark Visited</button>
           <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
           <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
           {visited ? 'I have visited this country.' : 'I want to visit'}
           
           <CountryDetail country={country}
           handleVisitedCountry={handleVisitedCountry}
           handleVisitedFlags={handleVisitedFlags}
           ></CountryDetail>
        </div>
    );
};

export default Country;