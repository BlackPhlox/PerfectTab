import React, { Component } from 'react';
import Button from '../components/button/Button';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            age: props.age,
            gender: props.gender,
            btn: false
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

    //Checks if the button should be enabled or disabled based on input
    checkButton(){
        if((this.state.name.length === 0 ||
            this.state.age.length === 0 ||
            this.state.gender.length === 0) &&
            this.state.btn
        ){
            this.setState({
                btn: false
            });
        }
        if( this.state.name.length &&
            (this.state.age.length && !isNaN(this.state.age) && (this.state.age>=15)) && 
            this.state.gender.length &&
            !this.state.btn) {
            this.setState({
                btn: true
            });
        }
        
    }

    //Called everytime input changes
    handleInputChange(e){
        const target = e.target;
        const elment_name = target.name;
        const value = target.value;
        
        this.setState({
            [elment_name]: value
        });
        

    }
    


    update(){
        this.props.onUpdate(this.state.name, this.state.age, this.state.gender);
    }

    //Creates a new form with two buttons and a dropdown menu
    render() {
        return (
            <div className="surveryContent">
                <div className="infobox"> 
                    <p> 
                        <b> I dette spørgeskema har vi brug for nogle personlige oplysninger, for at identificere vores målgruppe. </b>
                    </p>
                </div>

                <div>
                    <form id="personligInfo">
                        <div className="row"><input type="text" id="name" defaultValue = {this.props.name} name="name" placeholder="Skriv fulde navn her..." onChange={this.handleInputChange}/></div>
                        <div className="row"><input type="number" id="age" defaultValue = {this.props.age} name="age" placeholder="Skriv alder her (min. 15 år)..." onChange={this.handleInputChange}/></div>
                        <div className="row">
                            <select name="gender" defaultValue={this.props.gender} onChange={this.handleInputChange}>
                                <option value="" disabled >Vælg køn</option>
                                <option value="F">Kvinde</option>
                                <option value="M">Mand</option>
                            </select>
                        </div>
                    </form>
                </div>
            
            <Button to="/ArtistPage" disabled={!this.state.btn} buttonText="Næste" className="buttonNext"/>

            </div>

        );
    }
}

export default PersonalInfo;