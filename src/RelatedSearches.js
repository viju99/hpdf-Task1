import React, { Component } from 'react';

import Paper from 'material-ui/Paper';

const style = {
  height: 400,
  width: 300,
  margin: 20,
  textAlign: 'left',
  display: 'inline-block'
};

class RelatedSearches extends Component {

    render() {
    return(
        <div>
            <Paper style={style} zDepth={1}>
                <h4>Related Searches</h4>
                <p>
                    <a href="https://twitter.com/hashtag/tripletalaqbill?src=rela" color="red">#tripletalaqbill</a>
                    <br/><br/>
                    <a href="https://twitter.com/hashtag/tripletalaqbill?src=rela">#tripletalaqbill</a>
                </p>
            </Paper>
        </div>
    );
    }
}

export default RelatedSearches;