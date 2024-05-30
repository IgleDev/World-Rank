import "./Main.css"
import { useState } from "react";
import Country from "./Country";

const Main = () => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');
    const [filter, setFilter] = useState('population');
    const [independent, setIndependent] = useState(false);
    const [memberUnitedNations, setMemberUnitedNations] = useState(false);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleFilterRegion = (region) => {
        setRegion(region);
    };


    const handleFilterName = (e) => {
        setSearch(e.target.value);
    }

    const handleFilterIndependent = (e) => {
        setIndependent(e.target.checked);
    };

    const handleFilterMemberUnitedNations = (e) => {
        setMemberUnitedNations(e.target.checked);
    };

    console.log(filter)
    return (
        <main className="container">
            <div className="d-flex justify-content-between text-center p-5 search">
                <h1 className="text-secondary">Found 249 countries</h1>
                <input type="text" name="search" id="search" 
                className="w-25 fw-bold" placeholder="Search by Name, Region, Subregion"
                onChange={handleFilterName}/>
            </div>
            <div className="d-flex justify-content-between">
                <div className="row">
                    <div className="col-lg-2 ms-5">
                        <h5 className="text-secondary">Sort by</h5>
                        <select className="form-select mb-5" aria-label="Default select example" onChange={handleFilterChange} value={filter}>
                            <option value={'population'}>Population</option>
                            <option value={'alphabetic'}>Alphabetic</option>
                            <option value={'area'}>Area km2</option>
                        </select>
                        <h5 className="text-secondary">Region</h5>
                        <div className="d-flex justify-content-space flex-wrap regions mb-5">
                            <button onClick={() => handleFilterRegion('Americas')}>Americas</button>
                            <button onClick={() => handleFilterRegion('Antarctic')}>Antarctic</button>
                            <button onClick={() => handleFilterRegion('Africa')}>Africa</button>
                            <button onClick={() => handleFilterRegion('Asia')}>Asia</button>
                            <button onClick={() => handleFilterRegion('Europe')}>Europe</button>
                            <button onClick={() => handleFilterRegion('Oceania')}>Oceania</button>
                        </div>
                        <h5 className="text-secondary">Status</h5>
                        <label className="text-secondary">
                            <input type="checkbox" name="member" 
                            className="me-2" onChange={handleFilterMemberUnitedNations}/>
                            Member of the United Nations
                        </label>
                        <label className="text-secondary">
                            <input type="checkbox" name="independent" 
                            className="me-2" onChange={handleFilterIndependent}/>
                            Independent
                        </label>
                    </div>
                    <div className="col-lg-9">
                        <Country filter={filter} search={search} region={region}
                        independient={independent} memberUnitedNations={memberUnitedNations}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;