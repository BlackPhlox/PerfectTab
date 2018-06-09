import React, { Component } from 'react';
import Button from '../components/button/Button';
import bg from '../bg.jpg';

class EndPage extends Component {
    // Places picture.
    // Creates a title.
    // Creates an infobox
    // Creates one button.
    render() {
        return (
            <div>
                <div align='center'>
                    <img src={bg} alt="bg.jpg" className='festival-img'/>
                </div>

                <h1> Marktramp </h1>

                <div className="infobox">
                    <p>
                        Du har nu deltaget i Marktramps undersøgelse. Mange tak for dine svar! Vi glæder os til at se dig til et brag
                        af en festival. God fest {this.props.name}.
                    </p>
                </div>

                <Button to="/" buttonText="Afslut" className="buttonNext" />

            </div>
        );
    }
}

export default EndPage;