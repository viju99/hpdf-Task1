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

export default App;
