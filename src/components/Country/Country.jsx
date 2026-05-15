import './Country.css'
const Country = ({country}) => {
    console.log(country)
    const {name, flags,population,area}=country
    return (
        <div className="country">
           <h3>name: {name?.common || "Missing"}</h3> 
           <img src={flags.png} alt="img" />
           <p>Population: {population}</p>
           <p>area: {area}</p>
        </div>
    );
};

export default Country;