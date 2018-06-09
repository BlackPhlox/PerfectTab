import React, { Component } from 'react';
import "./Slider.css";

class Slider extends Component {
    constructor(props){
        super(props);
        
        this.state =({
            value: props.defaultValue
        })

        this.update = this.update.bind(this);

    }

    //Sets text from list below slider
    printAllText(){
        const list = this.props.text.map((text, integer) => 
            <li key={integer}>{text}</li>
        )
        return(list);
    }

    //updates the value of the slider based on the input everytime input is changed
    update(event) {
        this.props.onUpdate(event);
    }

    //Creates a slider and a horizontal list of values below it
    render() {
        
        return (
            <div>
                <div className="slidercontainer">
                    <input type='range' min={this.props.min} max={this.props.max} defaultValue={this.state.value ? this.state.value : 0} step={this.props.step} onInput={this.update} name={this.props.name} />
                </div>
                <div className="listcontainer">
                    <ul id="rangelist">
                        {this.printAllText()}
                    </ul>
                </div>
            </div>
        );
        
    }
}

export default Slider;