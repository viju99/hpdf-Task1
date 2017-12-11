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
            <div className = "leftbar">
              <PersonalSummary />
            </div>
            <div>
              <TrendsForYou />
            </div>
            <div>
              <ListOfCards />
            </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
