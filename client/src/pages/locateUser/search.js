import React, { useEffect, useState } from 'react';
import PlacesAutoComplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";
import './search.css';
import triangulate from '../locateUser/triangulate';
import { BsGeoAlt } from "react-icons/bs";
import Products from '../products/products';


export default function Search(props) {
//Creates State Variables
const [address, setAddress] = useState("");
const [coordinates,setCoordinates] = useState({
    lat: null,
    lng: null,
});

//set lat and long by calculating them from the google api
const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
};

const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(findUser,nofindUser)
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
const findUser = (position) => {
    const {latitude, longitude} = position.coords
    setCoordinates({lat:latitude, lng:longitude})
}
const nofindUser = () => {

}

useEffect(() => {
    if(coordinates.lat && coordinates.lng) {
        window.location = '/products';
        window.open('/products');
    }
}, [coordinates])

const returnProducts = () => {
    window.location = '/products';
    window.open('/products');
}

return (
    <div className="searchBar">
        <PlacesAutoComplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className='searchContainer'>
        <button className='userLocator' onClick={() => returnProducts()}><BsGeoAlt/></button>
            <input className='search-input'
            {...getInputProps({
                placeholder: 'Enter Address Here ...',
            })}
            />
            <button className='userLocator' onClick={() => returnProducts()}>Submit</button>
            <div className='dropdownContainer'>
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                const style = {
                    backgroundColor: suggestion.active ? "rgb(88, 89, 91)" : "rgb(60, 60, 1)",
                    color: 'white',
                    'text-align': 'left',
                    'padding-left': "40px",
                    fontFamily: '"Montserrat", sans-serif'
                };
                return (
                    <div
                    {...getSuggestionItemProps(suggestion, {
                        style
                    })}
                    >
                        <span>{suggestion.description}</span>
                    </div>
                );
                })}
            </div>
            </div>  
        )}    
        </PlacesAutoComplete>
    </div>
)

}