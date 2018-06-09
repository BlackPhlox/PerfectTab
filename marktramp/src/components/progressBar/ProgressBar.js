import React, { Component } from 'react';
import './ProgressBar.css';
import { NavLink } from 'react-router-dom';

class ProgressBar extends Component {
    // Creates the progress dots.
    render() {
        return (
            <div className={!this.props.showProgressBar ? 'hidden' : ''}>
                <div className='progress-box' align="center">
                    <NavLink className="progressDot" to='/PersonalInfo'></NavLink>
                    <NavLink className="progressDot" to='/ArtistPage'></NavLink>
                    <NavLink className="progressDot" to='/PlacementInfo'></NavLink>
                    <NavLink className="progressDot" to='/FoodAndMoneyPage'></NavLink>
                    <NavLink className="progressDot" to='/SummaryPage'></NavLink>
                </div>
            </div>
        );
    }
}

export default ProgressBar;
