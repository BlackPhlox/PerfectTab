import React, { Component } from 'react';
import Button from '../components/button/Button';
import Slider from '../components/slider/Slider';

const text = [
    "0 DKK",
    "250 DKK",
    "500 DKK",
    "750 DKK",
    "1000+ DKK"
]

class FoodAndMoneyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            money: this.props.money,
            food: this.props.food,
            btn: false
        };
        this.update = this.update.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // Checks if the button should be enabled or disabled.
    componentWillMount(){
        this.checkButton();
    }

    // Runs when changed.
    // Calls update.
    componentWillUnmount(){
        this.update();
    }

    // Checks if the button should be enabled or disabled,
    // when the page is updated
    componentDidUpdate(){
        this.checkButton();
    }

    // Sends the state of money and food to MainContent to save for later use.
    update(){
        this.props.onUpdate(this.state.money, this.state.food);
    }

    // Handles the info, and 
    handleInputChange(e){
        const target = e.target;
        const elment_name = target.name;
        const value = target.value;
        
        this.setState({
            [elment_name]: value
        });
           
    }

    checkButton(){
        if(this.state.food && !this.state.btn){
            this.setState({
                btn: true
            })
        }
        if((
            this.state.food.length === 0) &&
            this.state.btn
        ){
            this.setState({
                btn: false
            });
        }
    }

    render() {
        return (
            <div>
                <div className="infobox"> 
                    <p> 
                        <b> Angiv dit estimerede pengeforbrug og madovervejelser </b>
                    </p>
                </div>

                <div className="sub-infobox">
                    <p>
                        Hvor mange penge vil du ca. bruge dagligt?
                    </p>
                </div>

               <Slider min = '0' max = '1000' step = '250' defaultValue={this.props.money ? this.props.money : "0"} onUpdate={this.handleInputChange.bind(this)} text={text} name="money"/>
                <br/><br/>
                <div className="sub-infobox">
                    <p>
                        Hvad foretrækker du af mad, og hvorfor?
                    </p>
                </div>
                <div className='textWrapper' align='center'>
                    <form id="foodInfo">
                        <textarea
                            value={this.state.food}
                            type='textarea'
                            id="food"
                            name="food"
                            placeholder="Skriv din foretrukne madret her (F.eks Pizza, Pasta, Lasagne eller Sushi). Specificer gerne" 
                            onChange={this.handleInputChange.bind(this)}/> 
                    </form>
                </div>         
            <Button to="/PlacementInfo" buttonText="Forrige" className = "buttonBack"/>
            
            <Button to="/SummaryPage" buttonText="Næste" className="buttonNext" disabled={!this.state.btn}/>
            
            </div>
        );
    }
}

export default FoodAndMoneyPage;