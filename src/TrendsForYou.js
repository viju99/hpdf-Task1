import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import './hpdfcard.css';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
//import "./headerButtons.css";

class TrendsForYou extends React.Component {

    
  render() {
  return (
        <List className = "trendsForYou" >
            <ListItem >
                <FlatButton  
            name="tweetsForYouButton">
            #India 16.5K Tweets
                </FlatButton>
            </ListItem>
            <ListItem>
            <FlatButton  name="tweetsForYouButton" className="tweetsForYouBtn"
            >#Congress 11K Tweets</FlatButton>
            </ListItem>
            <ListItem>
            <FlatButton  name="tweetsForYouButton" className="tweetsForYouBtn"
            >#ASEA 14.5K Tweets</FlatButton>
            </ListItem>
            <ListItem>
            <FlatButton  name="tweetsForYouButton" className="tweetsForYouBtn"
            >#BCCI 20K Tweets</FlatButton>
            </ListItem>
            <ListItem>
            <FlatButton  name="tweetsForYouButton" className="tweetsForYouBtn"
            >#MukeshAmbani</FlatButton>
            </ListItem>

        </List> 
  );
  }
}
//);

export default TrendsForYou;
