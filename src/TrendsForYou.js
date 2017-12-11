import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import './hpdfcard.css';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import "./headerButtons.css";

class TrendsForYou extends React.Component {

    
  render() {
  return (
    <div className = "trendsForYou">
        <List  >
            <ListItem className = "listOfInterest">
            <FlatButton  name="tweetsForYouButton"
            >#India 16.5K Tweets</FlatButton>
            </ListItem>
            <ListItem>
            <FlatButton  name="tweetsForYouButton"
            >#Congress 11K Tweets</FlatButton>
            </ListItem>
            <ListItem>
            <FlatButton  name="tweetsForYouButton"
            >#ASEA 14.5K Tweets</FlatButton>
            </ListItem>
            <ListItem>
            <FlatButton  name="tweetsForYouButton"
            >#BCCI 20K Tweets</FlatButton>
            </ListItem>
            <ListItem>
            <FlatButton  name="tweetsForYouButton"
            >#MukeshAmbani</FlatButton>
            </ListItem>

        </List> 
    </div>
  );
  }
}
//);

export default TrendsForYou;
