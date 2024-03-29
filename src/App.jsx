import React from 'react';
import Home from './Home.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Contact from './Contact.jsx'
import About from './About.jsx';
import Services from './Services.jsx';
import {Switch , Route,Redirect} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import './index.css';


const App =()=>{
  
    return(
        <>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Redirect to="/" />
        </Switch>
        </>
    );

};
export default App;