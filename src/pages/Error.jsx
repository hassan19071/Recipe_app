import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "../imgs/not-exists.svg";
import "../css/error.scss";

const Error = () => {
    return ( 
        <div className="error text-center">
            <div className="container">
                <div className="img">
                    <img src={img}/>
                </div>
                <h2>Page Is Not Found</h2>
                <NavLink to="/">Back To Home</NavLink>
            </div>
        </div>
     );
}
 
export default Error;