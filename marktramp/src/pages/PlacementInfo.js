import React, { Component } from 'react';
import Button from '../components/button/Button';
import Slider from '../components/slider/Slider';


const text = [
    "Meget unødvendigt",
    "Lidt unødvendigt",
    "Ligeglad",
    "Lidt vigtigt",
    "Meget vigtigt"
]

class PlacementInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toilet: this.props.toilet,
            festival: this.props.festival,
            nature: this.props.nature,
            btn: true
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
        this.checkButton();
    }

    componentWillUnmount(){
        this.update();
    }


    componentDidUpdate(){
        this.checkButton();
    }

    checkButton(){
        if(this.state.toilet && this.state.festival && this.state.nature && !this.state.btn){
            this.setState({
                btn: true
            })
        }
        if((this.state.toilet.length === 0 ||
            this.state.festival.length === 0 ||
            this.state.nature.length === 0) &&
            this.state.btn
        ){
            this.setState({
                btn: true
            });
        }
    }


    handleInputChange(e){
        const target = e.target;
        const elment_name = target.name;
        const value = target.value;
        
        this.setState({
            [elment_name]: value
        });
        }

    update(){
        this.props.onUpdate(this.state.toilet, this.state.festival, this.state.nature);
    }

    render() {
        return (
            <div>
                <div className="infobox"> 
                    <p> 
                        <b> Vurder betydningen af hvert område. </b>
                    </p>
                </div>

                <div className="sub-infobox">
                    <p>
                        Hvor vigtigt er det at toilettet er tæt på?
                    </p>
                </div>

                <Slider min = '1' max = '5' step = '1' defaultValue={this.props.toilet ? this.props.toilet : "3" } onUpdate={this.handleInputChange.bind(this)} text={text} name="toilet" />

                <div className="sub-infobox">
                    <p>
                        Hvor vigtigt er det at festivalpladsen er tæt på?
                    </p>
                </div>

                <Slider min = '1' max = '5' step = '1' defaultValue = {this.props.festival ? this.props.festival : "3"} onUpdate={this.handleInputChange.bind(this)} text={text} name="festival"/>
                
                <div className="sub-infobox">
                    <p>
                        Hvor vigtigt er det at naturen er tæt på?
                    </p>
                </div>   

                <Slider min = '1' max = '5' step = '1' defaultValue = {this.props.nature ? this.props.nature : "3"} onUpdate={this.handleInputChange.bind(this)} text={text} name="nature"/>

            <Button to="/ArtistPage" buttonText="Forrige" className="buttonBack" />
             
            <Button to="/FoodAndMoneyPage" buttonText="Næste" className="buttonNext"/>
                               

            </div>
        );
    }
}

export default PlacementInfo;