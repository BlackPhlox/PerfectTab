import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';
// Creates a button
class Button extends Component {
    render(){
        return(
            <Link to={this.props.to}><button className={this.props.className}
            disabled={this.props.disabled} onClick={this.props.onClick}> {this.props.buttonText} </button></Link>
        );
    }
}

export default Button;