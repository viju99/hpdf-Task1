import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyToolbar from './MyToolbar.js';
import HpdfCard from './HpdfCard';
import ListOfCards from './ListOfCards';
import PersonalSummary from './PersonalSummary';
import TrendsForYou from './TrendsForYou'
import RightNavBar from './RightNavBar';
import HpdfTextField from './HpdfTextField';
import { BrowserRouter, Switch, Route, History } from "react-router-dom";
import Home from './Home';
import Result from './Result';

/*New content
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MyHeaderButtons from './MyHeaderButtons';
import { white } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import logo from './Twitter-logo.png'
import './logo.css';


const style = {
  height: 50,
  backgroundColor: white
};

const styleText ={
  position: 'relative',
  left:-20

};

New content ends*/


/*
This is the working code
class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <MyToolbar />
          <p>
            <div className="contentContainer">
              <div>
                <PersonalSummary />
                <TrendsForYou />
              </div>
                <div>  
                  <ListOfCards />
                </div>
              <div>
                <RightNavBar />
              </div>
            </div>
          </p>
        </MuiThemeProvider>
      </div>
    );
  }
}
*/
class App extends Component{
  
  
  render() {
  return (
      <BrowserRouter>
        <MuiThemeProvider>
          <p>
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={Result}/>
          </p>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

const Main = () => (
  <main>
    
  </main>
)
export default App;
