import React from 'react'
import { Link } from 'react-router-dom'
// import LocationFormContainer from './LocationFormContainer'
import './LocationsList.css'

export default function LocationsList(props) {

    console.log(props)
    return (
        <div className="responsive">
            <ul>
                {props.locations && props.locations.map((location) => (
                    <li key={location.picture}>
                        <img key={location.picture} className="img-responsive" src={location.picture} alt="logo" />
                        <br></br>
                        <Link to={`/locations/${location.id}`}>
                            {location.name}
                        </Link>
                        {" - '" + location.description + "'"}
                        <br></br>
                        {"date: " + location.date}
                        <p></p>
                    </li>
                ))}
            </ul>
            <h2>Add a location:</h2>
            {/* <LocationFormContainer /> */}
        </div>
    )
}


