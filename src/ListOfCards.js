import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './hpdfcard.css';
import imageDT from './trump.jpg'
import imageAB from './BigB.jpg'
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import TextField from 'material-ui/TextField';

// import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ChatBubbleOutline from 'material-ui/svg-icons/communication/chat-bubble-outline';
import Cached from 'material-ui/svg-icons/action/cached';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import MailOutline from 'material-ui/svg-icons/communication/mail-outline';

/*
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
  red100,
} from 'material-ui/styles/colors';*/

const recentsIcon = <FontIcon className="material-icons">recent</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const chatBubbleOutlineIcon = <FontIcon className="material-icons">chatBubbleOutline</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const chatIcon = <ChatBubbleOutline />;
const reTweetIcon = <Cached />;
const favoriteIcon = <FavoriteBorder />;
const mailIcon = <MailOutline />;

const style = {margin: 1};

const styleTextField ={
  width: 250,
  right: 100
};

class ListOfCards extends React.Component {

  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  

  render() {
  return (
    <List className="hpdfcard">
      <ListItem>
        <Card className="whatsHappeningField">
          <CardHeader className="cardHeaderTop"
          avatar={imageDT}
          />
          <TextField
            style={styleTextField}
            id="text-Search-WhatsHappening"
            hintText="What's Happening?"
          />
        </Card>
      </ListItem>
      <ListItem>
        <Card >
          <CardHeader className="cardHeader"
          title="Donald Trump"
          subtitle="@readDonaldTrump"
          avatar={imageDT}
          />
          <CardText>
          Things are going really well for our economy, a subject the Fake News spends as little time as possible discussing! Stock Market hit another RECORD HIGH, unemployment is now at a 17 year low and companies are coming back into the USA. Really good news, and much more to come!
          </CardText>
          <CardMedia
            overlay={<CardTitle  />}
          >
            <img className="cardImage" src={imageDT} alt="" />
          </CardMedia>
          <CardText>
          I will say whatever comes to my mind without thinking :)
          </CardText>
          <CardActions>
            <Paper zDepth={1}>
              <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                  label="1"
                  icon={chatIcon}
                  onClick={() => this.select(0)}
                />
                <BottomNavigationItem
                  label="4"
                  icon={reTweetIcon}
                  onClick={() => this.select(1)}
                />
                <BottomNavigationItem
                  label="25"
                  icon={favoriteIcon}
                  onClick={() => this.select(2)}
                />
                <BottomNavigationItem
                label="44"
                icon={mailIcon}
                onClick={() => this.select(3)}
                />
              </BottomNavigation>
            </Paper>
          </CardActions>
        </Card>

      </ListItem>
      <ListItem>
        <Card >
          <CardHeader className="cardHeader"
          title="Amitabh Bachan"
          subtitle="@SrBachchan"
          avatar={imageAB}
          />
          <CardMedia
            overlay={<CardTitle  />}
          >
            <img className="cardImage" src={imageAB} alt="" />
          </CardMedia>
          <CardText>
          T 2737 - 80  MILLION followers !!! on social  media .. collective !!
          80  MILLION  !! 80  MILLION !! 🙏🙏🙏🙏🙏🙏🙏🙏
          </CardText>
          <CardActions>
            <Paper zDepth={1}>
              <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                  label="1"
                  icon={chatIcon}
                  onClick={() => this.select(0)}
                />
                <BottomNavigationItem
                  label="4"
                  icon={reTweetIcon}
                  onClick={() => this.select(1)}
                />
                <BottomNavigationItem
                  label="25"
                  icon={favoriteIcon}
                  onClick={() => this.select(2)}
                />
                <BottomNavigationItem
                label="33"
                icon={mailIcon}
                onClick={() => this.select(3)}
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

export default ListOfCards;