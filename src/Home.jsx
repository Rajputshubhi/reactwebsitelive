import React from 'react';
import logo from './images/aa6.jpeg';


const Home =()=>{
  
    return(
        <>
        <div className="header">
        <div className="img_div">
        <img src={logo} alt="logo" width="550px" height="400" />
        </div>
        <div className="lefter_div">
        <h1>shubham rana tech</h1>
        <br />
        <p>the awesome web React js</p>
        <br />
        <button className="btn btn-outline-dark">Get ME</button>

        </div>
        </div>

 
        
        </>
    );

};
export default Home;