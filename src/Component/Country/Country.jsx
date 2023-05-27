import React from 'react';

const Country = (props) => {
const {name, area, population}= props.country;
//    [name]=country
    // console.log(country);
    return (
        <div>
            {/* <h4>Name-{props.country.name.common}</h4>
            <h4>Area-{props.country.area}</h4>
            <h4>Population-{props.population}</h4> */}
            <h4>Name-{name.common}</h4>
            <h4>Area-{area}</h4>
            <h4>Population-{population}</h4>
        </div>
    );
};

export default Country;