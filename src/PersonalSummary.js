import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './hpdfcard.css';
import imageDT from './trump.jpg';
import imageAB from './BigB.jpg';
import Avatar from 'material-ui/Avatar';
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

const style = {margin: 1};

class PersonalSummary extends React.Component {

  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
  return (
    <List className="personalSummary">
      <ListItem>
        <Card >
          <CardHeader className="summaryHeader"
          title="Vijay Sankar"
          subtitle="@Vijay_Sankar"
          avatar={imageAB}
          />
          <CardActions>
            <Paper zDepth={1}>
              <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                  label="Tweets"
                  icon={chatIcon}
                  onClick={() => this.select(0)}
                />
                <BottomNavigationItem
                  label="Following"
                  icon={reTweetIcon}
                  onClick={() => this.select(1)}
                />
                <BottomNavigationItem
                  label="Followers"
                  icon={favoriteIcon}
                  onClick={() => this.select(2)}
                />
              </BottomNavigation>
            </Paper>
          </CardActions>
        </Card>

      </ListItem>
    </List>
  );
  }
}
//);

export default PersonalSummary;