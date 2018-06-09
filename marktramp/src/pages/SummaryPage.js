import React, { Component } from 'react';
import Button from '../components/button/Button';
import { withRouter, Redirect } from 'react-router-dom';

class SummaryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: false,
            redirect: false,
        };
        this.sendData = this.sendData.bind(this)
    }

    //Function for creating a small box for displaying the user's input
    createField(title, value) {
        return (
            <div className="box">
                <p> <b>{title}</b> <br /> {value} </p>
            </div>
        )
    }

    componentWillMount() {
        this.checkButton();
    }

    componentDidUpdate() {
        this.checkButton();
    }

    //Function for enabling and disabling the 'next' button based on user input
    checkButton() {
        if ((this.props.name.length === 0 ||
            this.props.age.length === 0 ||
            this.props.gender.length === 0 ||
            this.props.artist.length === 0 ||
            this.props.toilet.length === 0 ||
            this.props.festival.length === 0 ||
            this.props.nature.length === 0 ||
            this.props.money.length === 0 ||
            this.props.food.length === 0) &&
            this.state.btn
        ) {
            this.setState({
                btn: false
            });
        }
        if (this.props.name.length &&
            (this.props.age.length && !isNaN(this.props.age) && (this.props.age >= 15)) &&
            this.props.gender.length &&
            this.props.artist.length === 3 &&
            this.props.toilet.length &&
            this.props.festival &&
            this.props.nature &&
            this.props.money &&
            this.props.food.length &&

            !this.state.btn) {
            this.setState({
                btn: true
            });
        }
    }


    //Sends the users data in the corect format
    sendData(event) {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        fetch('https://syst-api.azurewebsites.net/marktramp/survey', {
            method: 'POST',
            body: JSON.stringify({
                name: this.props.name,
                gender: this.props.gender,
                age: this.props.age,
                artists: this.props.artist,
                grades: {
                    toilet: this.props.toilet,
                    festival: this.props.festival,
                    nature: this.props.nature
                },
                money: this.props.money,
                food: this.props.food
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            console.log(response);
            if (response.ok) {
                return response;
            } else {
                let error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }).then(response => this.setState({ redirect: response.ok }))
            .catch(function (error) {
                alert(error);
            });

    }

    //Displays a summarypage with all the users information they have inputted
    //Throughout the survey, by using the createField() function
    render() {

        if (this.state.redirect) {
            return <Redirect to='/EndPage' />;
        }
        return (
            <div>
                <div className="infobox">
                    <p>
                        <b> Her er dine besvarelser. Godkend ved at trykke på 'Næste' knappen. </b>
                    </p>
                </div>

                <div className="grid">
                    <div className="personal">
                        <p className="catagories"><b> Personlige oplysninger</b> </p>
                        {this.createField("Navn", this.props.name)}
                        {this.createField("Alder", this.props.age)}
                        {this.createField("Køn", this.props.gender)}
                    </div>

                    <div>
                        <p className="catagories"><b> Favorit kunstner</b> </p>
                        {this.createField("Kunstner 1", this.props.artist[0])}
                        {this.createField("Kunstner 2", this.props.artist[1])}
                        {this.createField("Kunstner 3", this.props.artist[2])}
                    </div>

                    <div>
                        <p className="catagories"> <b>Placering på festival</b> </p>
                        {this.createField("Placering ved toilet", this.props.toilet)}
                        {this.createField("Placering ved festivalspladsen", this.props.festival)}
                        {this.createField("Placering ved naturen", this.props.nature)}
                    </div>

                    <div>
                        <p className="catagories"><b> Penge- og madforbrug</b> </p>
                        {this.createField("Mængde penge per dag i DKK", this.props.money)}
                        {this.createField("Yndligsret udfyldt", this.props.food ? "Ja" : "Nej")}

                    </div>


                </div>

                <Button to="/FoodAndMoneyPage" buttonText="Forrige" className="buttonBack" />
                <Button to="/EndPage" buttonText="Næste" disabled={!this.state.btn} className="buttonNext" onClick={this.sendData} />
            </div>
        );
    }
}

export default withRouter(SummaryPage);