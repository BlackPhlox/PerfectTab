import React, { Component } from 'react';
import './Checkbox.css';
import Logo from '../logo/Logo'


class Checkbox extends Component {
  state = {
    checked: this.props.isChecked,
  }

  //Toggles the button
  toggleCheckboxChange = () => {
    const {handleCheckState, handleCheckboxChange, label } = this.props;

    this.setState(({ checked }) => (
      {
        checked: handleCheckState(label),
      }
    ));

    handleCheckboxChange(label);
  }

  //Displays a checkbox (used in artispage)
  render() {
    const { label } = this.props;

    return (
      <div className="checkbox">
      <input
            type="checkbox"
            value={label}
            checked={this.state.checked}
            onChange={this.toggleCheckboxChange}
            id={label}
          />
      <label htmlFor={label}>
          {label}
          <div>
          <Logo/>
          </div>
        </label>
       
      </div>
    );
  }
}


export default Checkbox;