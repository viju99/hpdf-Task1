import React, { Component } from 'react';


import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyToolbar from './MyToolbar.js';
import HpdfCard from './HpdfCard';
import ListOfCards from './ListOfCards';
import ListOfResults from './ListOfResults';
import PersonalSummary from './PersonalSummary';
import TrendsForYou from './TrendsForYou'
import RightNavBar from './RightNavBar';
import HpdfTextField from './HpdfTextField';
import RelatedSearches from './RelatedSearches';
import RelatedArticles from './RelatedArticles';

/*New content*/
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MyHeaderButtons from './MyHeaderButtons';
import { white } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import logo from './Twitter-logo.png'
import './logo.css';
/*New content ends*/

const style = {
    height: 50,
    backgroundColor: white
  };
  
  const styleText ={
    position: 'relative',
    left:-20
  
  };

class SearchResults extends Component{

    constructor(props) {
        super(props);
      }
      
      handleChange = (event, index, value) => this.setState({value});
      
      handleSubmit(ev){
        console.log(`Pressed keyCode ${ev.key}`);
        if (ev.key === 'Enter') {
          alert("entered");
          this.props.history.push("/search");
          ev.preventDefault();
        }
        console.log(this);
      }

    render() {
    return (
            <div>
                <Toolbar style={style}>
                    <ToolbarGroup >
                        <MyHeaderButtons />
                    </ToolbarGroup>
                    <ToolbarGroup >
                        <div>
                            <img className="twitterLogo" src={logo} alt="Logo" />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div>
                            <TextField
                            name="searchString"
                            style={styleText}
                            id="text-Search-Twitter"
                            hintText="Search Twitter"
                            onKeyPress={this.handleSubmit.bind(this)}
                            />
                        </div>
                        <div>
                            <button className="tweetButton" > Tweet </button>
                        </div>
                    </ToolbarGroup>
                </Toolbar>  
              <div className="contentContainer">
                <div>
                  <RelatedSearches />
                  <RightNavBar />
                  <TrendsForYou />
                </div>
                  <div>  
                    <ListOfResults />
                  </div>
                <div>
                  <RelatedArticles />
                </div>
              </div>
            </div>
      );
    }
  }

export default SearchResults;