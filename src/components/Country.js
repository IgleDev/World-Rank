import { useState, useEffect } from "react";
import "./Country.css"
const Country = ({ filter, search, independient, memberUnitedNations, region }) => {

    const [countries, setContries] = useState([]);

    useEffect(() => {
        async function getContries() {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setContries(data);
        }
        getContries();
    }, []);

    const filterCountries = [...countries]
    .filter(country => {
        if (region && country.region !== region) return false;
        return true;
    })
    .filter(country => {
        if(memberUnitedNations && country.unMember === memberUnitedNations) return false;
        return true;
    })
    .filter(country => {
        if(independient && country.independent === independient) return false;
        return true
    }).filter(country => 
        country.name.common.toLowerCase().includes(search.toLowerCase()) ||
        country.region.toLowerCase().includes(search.toLowerCase()) ||
        (country.subregion && country.subregion.toLowerCase().includes(search.toLowerCase()))
    ).sort((a,b) => {
        if (filter === 'population') return b.population - a.population
        else if (filter === 'alphabetic') return a.name.common.localeCompare(b.name.common)
        else if (filter === 'area') return b.area - a.area
        else return 0;
    });
    
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th className="text-secondary fw-bold">Flag</th>
                    <th className="text-secondary fw-bold">Name</th>
                    <th className="text-secondary fw-bold">Population</th>
                    <th className="text-secondary fw-bold">Area (km2)</th>
                    <th className="text-secondary fw-bold">Region</th>
                </tr>
            </thead>
            <tbody>
                {filterCountries.map((country, index) => 
                    <tr key={index}> 
                        <td>{country.flag}</td>  
                        <td>{country.name.common}</td>
                        <td>{country.population}</td>
                        <td>{country.area} km2</td>
                        <td>{country.region}</td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    )
}

export default Country;