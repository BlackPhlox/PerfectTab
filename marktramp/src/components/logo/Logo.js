import React, { Component } from 'react';
import logo from './logo.svg';

export default class Logo extends Component{
    //Logo component for displaying at the top of the survey
    render(){
        return(
            <img src={logo} alt="logo"/>
        )
    }
}


