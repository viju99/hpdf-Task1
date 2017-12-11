import React from 'react';
import TextField from 'material-ui/TextField';

const style ={
  position: 'relative',
  left:-20

};

const HpdfTextField = (props) => (
  <div>
    <TextField
      style={style}
      id="text-Search-Twitter"
      hintText={props.showText}
    />
  </div>
);

export default HpdfTextField;
