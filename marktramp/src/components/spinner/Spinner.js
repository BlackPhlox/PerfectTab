import React, { Component } from 'react';
import './Spinner.css';
import Logo from '../logo/Logo.js';

class Spinner extends Component{
    //Spinner component for displaying when application is fetching data
    render(){
        return(
            <div>
                <div className="spinner-animation">
                    <Logo/>
                </div>
                <p>Loading...</p>
            </div>
        )
    }
}

export default Spinner;
