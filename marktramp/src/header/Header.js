import React, { Component } from 'react';
import './Header.css';
import logo from './Marktramp_logo_pos_flip.png';

class Header extends Component{
    render(){
        return(
            <div className="hg__head">
                    <img className="img-header" src={logo} alt="img-header"/>
            </div>
        )
    }
}

export default Header;
