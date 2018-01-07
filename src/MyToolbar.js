import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MyHeaderButtons from './MyHeaderButtons';
import { white } from 'material-ui/styles/colors';
import HpdfTextField from './HpdfTextField';
import logo from './Twitter-logo.png'
import './logo.css';

const style = {
  height: 50,
  backgroundColor: white
};

class MyToolbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
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
            <HpdfTextField showText = "Search Twitter" />
          </div>
          <div>
            <button className="tweetButton" onClick={console.log("clicked here")}> Tweet1 </button>
          </div>
        </ToolbarGroup>
      </Toolbar>  
    );
  }
}

export default MyToolbar;