import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar =()=>{
    return (

        <>
        <div className="menu_style">
        <NavLink  className="nav_link" exact to="/">Home
        </NavLink>
        <NavLink  className="nav_link" exact to="/About">Search
        </NavLink>
        <NavLink  className="nav_link" exact to="/Contact">Contact
        </NavLink>
        <NavLink  className="nav_link" exact to="/Services">Services
        </NavLink>
        </div>
          </>
    
    );


 };
 export default Navbar;