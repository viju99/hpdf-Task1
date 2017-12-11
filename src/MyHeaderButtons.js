import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import "./headerButtons.css";
import { white, black } from 'material-ui/styles/colors';

const style = {
  height: 50,
  width: 100,
  margin: 10,
  padding: 5,
  color: black
};

const MyHeaderButtons = () => (
  <div>
      <FlatButton className = "headerButtons" name="StylesOverridingInlineExample"
      style={style}>Home</FlatButton>
      <FlatButton className = "headerButtons" name="StylesOverridingInlineExample"
      style={style}>
      Notifications</FlatButton>
      <FlatButton className = "headerButtons" name="StylesOverridingInlineExample"
      style={style}>Messages</FlatButton>
  </div>

);

export default MyHeaderButtons;
