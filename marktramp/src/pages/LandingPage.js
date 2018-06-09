import React, { Component } from 'react';
import Button from '../components/button/Button';
import bg from '../bg.jpg';

class LandingPage extends Component {
    //Creates the default page the user enters on connection
    //It's a simple page with only an infobox displaying a welcome message
    render() {
        return(
            <div>
                <div align='center'>
                    <img src={bg} alt="bg.jpg" className='festival-img'/>
                </div>
                <div className="whitebox">
                <h1> Marktramp </h1>

                <div className="infobox"> 
                    <p> 
                        Vi hos Marktramp har udvalgt dig til, at hjælpe os med med at give og dine venner en endnu federe oplevelse.
                        Derfor beder vi dig om at svare på udvalgte spørgsmål, som har betydning for hvordan vi vil håndtere festivalen og de grupperinger,
                        som ender med at være muligheder til overnatning.
                    </p>
                </div>
                
                
                <Button to="/PersonalInfo" buttonText="Deltag" className="buttonNext"/>
                

                </div>
            </div>
        );
    }
}

export default LandingPage;