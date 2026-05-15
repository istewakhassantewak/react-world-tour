import './Country.css'
const Country = ({country}) => {
    console.log(country)
    const {name, flags}=country
    return (
        <div className="country">
           <h3>name: {name?.common || "Missing"}</h3> 
           <img src={flags.png} alt="img" />
        </div>
    );
};

export default Country;