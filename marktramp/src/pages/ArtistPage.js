import React, { Component } from 'react';
import Button from '../components/button/Button';
import Spinner from '../components/spinner/Spinner';
import Checkbox from '../components/checkbox/Checkbox';

class ArtistPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            limit: 3,
            btn: false
        };
    }

    // Puts artists in selectedCheckboxes.
    // Checks if the button should be enabled or disabled.
    componentWillMount = () => {
        this.selectedCheckboxes = this.props.artist;
        this.checkButton();
    }

    // Runs one time, makes an API call
    componentDidMount() {
        fetch('https://syst-api.azurewebsites.net/marktramp/artists')
            .then(response => response.json())
            .then(data => this.setState({ artists: data }));
    }

    // Runs when changed
    // Calls update
    componentWillUnmount(){
        this.update();
    }

    // Places label in selectedCheckboxes if it is smaller than 3, and not already there.
    // If it is there it removes the label.
    // Checks if the button should be disabled or enabled.
    toggleCheckbox = label => {
        if (this.selectedCheckboxes.length < this.state.limit && !this.selectedCheckboxes.includes(label)) {
            this.selectedCheckboxes.push(label);
        } else if(this.selectedCheckboxes.includes(label)) {
            this.selectedCheckboxes.splice(this.selectedCheckboxes.indexOf(label),1);
        }  
        this.checkButton();
        if (this.selectedCheckboxes.length === this.state.limit && !this.selectedCheckboxes.includes(label)) {
           alert('Du kan maks. vælge tre kunstnere. Fravælg en af de tidligere for at vælge en ny.')
        }
    }

    // Since setState is an asyncron function, therefore can't we expect that this function will be called in correct order.
    // Figures if the current label is included, if it is then it returns the label.
    handleCheckState = label => {
        return((this.selectedCheckboxes.includes(label)))

    }

    // Creates a checkbox.
    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            handleCheckState={this.handleCheckState}
            key={label}
            isChecked={this.selectedCheckboxes.includes(label)}
        />
    )

    // Calls create checkboxes on each of the elements.
    createCheckboxes = () => (
        this.state.artists.map(this.createCheckbox)
    )

    // Sends selectedCheckboxes to MainContent to save for later use.
    // CheckButton checks if the limit is 3 or not and disables or enables the button respectively.
    update(){
        this.props.onUpdate(this.selectedCheckboxes);
    }

        checkButton(){
        if((this.selectedCheckboxes.length === this.state.limit) && !this.state.btn) {
            this.setState({
                btn:true
            });
        }
       if((this.selectedCheckboxes.length !== this.state.limit ) && this.state.btn) { 
           this.setState({
             btn:false
            });
        }
    }

    // Creates the page with infobox.
    // Creates checkboxes.
    // Creates two buttons.
    render() {
        return (
            <div>
                <div className="infobox">
                    <p>
                        <b> Vælg 3 kunstnere, som du mest ser frem til på festivalen. </b>
                    </p>
                </div>

                {
                    this.state.artists.length > 0 ? this.createCheckboxes() : <div><Spinner /></div>
                }

                <Button to="/PersonalInfo" buttonText="Forrige" className="buttonBack" />

                <Button to="/PlacementInfo" disabled={!this.state.btn} buttonText="Næste" className="buttonNext"/>

            </div>
        );
    }
}

export default ArtistPage;