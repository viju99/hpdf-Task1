import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MyHeaderButtons from './MyHeaderButtons';
import { white } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import HpdfTextField from './HpdfTextField';
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

class MyToolbar extends React.Component {

  constructor(props) {
    super(props);
    /*this.state = {
      value: 3,
      searchString1: "Vijay"
    };*/
  }

  handleChange = (event, index, value) => this.setState({value});

  hanldePick(ev){
    console.log(`Pressed keyCode ${ev.key}`);
    if (ev.key === 'Enter') {
      alert("entered");
      alert (this.value);
      ev.preventDefault();
    }
    console.log(this);
  }

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
            <TextField
              name="searchString"
              style={styleText}
              id="text-Search-Twitter"
              hintText="Search Twitter"
              onKeyPress={this.hanldePick.bind(this)}
            />
          </div>
          <div>
            <button className="tweetButton" onClick={this.hanldePick}> Tweet </button>
          </div>
        </ToolbarGroup>
      </Toolbar>  
    );
  }
}

export default MyToolbar;