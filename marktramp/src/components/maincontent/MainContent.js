
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './MainContent.css';

import LandingPage from '../../pages/LandingPage';
import PersonalInfo from '../../pages/PersonalInfo';
import ArtistPage from '../../pages/ArtistPage';
import PlacementInfo from '../../pages/PlacementInfo';
import FoodAndMoneyPage from '../../pages/FoodAndMoneyPage';
import SummaryPage from '../../pages/SummaryPage';
import EndPage from '../../pages/EndPage';
import ProgressBar from '../progressBar/ProgressBar';

class MainContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            age: "",
            gender:"",
            artist: [],
            toilet: '3',
            festival: '3',
            nature: '3',
            money: '0',
            food:'',
            showProgressBar: false
        };
    }
    
    componentDidMount(){
        this.checkRoute();
    }

    componentDidUpdate(){
        this.checkRoute();
    }

    /* Checks url and will hide the progressbar if first or last page*/
    checkRoute(){
        let href = window.location.href;
        let last = (href.match(/([^/]*)\/*$/)[1]);
        if(last === "#" || last === "EndPage"){
            if(this.state.showProgressBar === true) this.setState({showProgressBar: false});   
        } else {
            if(this.state.showProgressBar === false) this.setState({showProgressBar: true});
        }
    }

    render(){
        return(
            <div className="hg__main">
                <div className='surveyarea'>
                    <ProgressBar showProgressBar={this.state.showProgressBar}/>
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>

                        <Route path="/PersonalInfo" render={(props)=>(
                            <PersonalInfo onUpdate={this.onUpdatePersonal.bind(this)} name={this.state.name} age={this.state.age} gender={this.state.gender}/>
                        )}/>

                        <Route path="/ArtistPage" render={(props)=>(
                            <ArtistPage onUpdate={this.onUpdateArtists.bind(this)} artist={this.state.artist}/>
                        )}/>

                        <Route path="/PlacementInfo" render={(props)=>(
                            <PlacementInfo onUpdate={this.onUpdatePlacement.bind(this)} toilet={this.state.toilet} festival={this.state.festival} nature={this.state.nature}/>
                        )}/>

                        <Route path="/FoodAndMoneyPage" render={(props)=>(
                            <FoodAndMoneyPage onUpdate={this.onUpdateFoodAndMoney.bind(this)} money={this.state.money} food={this.state.food}/>
                        )}/>

                        <Route path="/SummaryPage" render={(props)=>( 
                            <SummaryPage onUpdate={this.onUpdatePersonal.bind(this)} 
                            name={this.state.name} age={this.state.age} gender={this.state.gender} 
                            artist={this.state.artist}
                            toilet={this.state.toilet} festival={this.state.festival} nature={this.state.nature}
                            money={this.state.money} food={this.state.food}/>
                        )}/>

                        <Route path="/EndPage" render={(props) =>(
                            <EndPage name={this.state.name}/>
                        )}/>
                        
                    </Switch>
                </div>
            </div>
        )
    }

    /* Update states */
    onUpdatePersonal (name, age, gender) { 
        this.setState({ name , age, gender});
    }

    onUpdateArtists(artist){
        this.setState({artist});
    }

    onUpdatePlacement(toilet, festival, nature){
        this.setState({toilet,festival,nature});
    }

    onUpdateFoodAndMoney(money, food){
        this.setState({money, food});
    }
}

export default MainContent;