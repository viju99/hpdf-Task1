import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './hpdfcard.css';
import imageDT from './trump.jpg'
import imageAB from './BigB.jpg'
import imageST from './shashi-tharoor.jpg';
import imageRN from './Rafael-Nadal.jpg'
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

// import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ChatBubbleOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import Cached from 'material-ui/svg-icons/action/cached';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import MailOutline from 'material-ui/svg-icons/communication/mail-outline';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const recentsIcon = <FontIcon className="material-icons">recent</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const chatBubbleOutlineIcon = <FontIcon className="material-icons">chatBubbleOutline</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const chatIcon = <ChatBubbleOutline />;
const reTweetIcon = <Cached />;
const favoriteIcon = <FavoriteBorder />;
const mailIcon = <MailOutline />;

const style = {margin: 1};

//const ListOfCards = () => (

class RightNavBar extends React.Component {

  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  getLinkHtml(link, target){
    const linkText = <a href={target}>{link}</a>;
    return linkText;
  }


  render() {
  return (
    <List className="rightNavBar">
      <ListItem>
        <Card >
          <CardText className='largeText'>
            <strong>Who to follow</strong>
          </CardText>
          <CardHeader className="cardHeader"
          title="Shashi Tharoor"
          subtitle= {this.getLinkHtml("ShashiTharoor","http://www.twitter.com")}
          avatar={imageST}
          />
          <button className="followButton"> Follow </button>
        </Card>
        <Card >
          <CardHeader className="cardHeader"
          title={"Rafael Nadal" + this.getLinkHtml("RafaelNadal","http://www.twitter.com/RafaelNadal")}
          subtitle={this.getLinkHtml("RafaelNadal","http://www.twitter.com/RafaelNadal")}
          avatar={imageRN}
          />
          <button className="followButton"> Follow </button>
        </Card>

      </ListItem>
      <ListItem>
        <Card >
          <CardHeader className="cardHeader"
          title="Rafael Nadal"
          subtitle="@RafaelNadal"
          avatar={imageRN}
          />
    
        </Card>
      </ListItem>
    </List>
  );
  }
}
//);

export default RightNavBar;