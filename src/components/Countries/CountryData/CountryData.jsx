const CountryData = ({country}) => {
    return (
        <div>
            <p><small>Country Data: {country.name.common}</small></p>
            <hr />
        </div>
        
    );
};

export default CountryData;