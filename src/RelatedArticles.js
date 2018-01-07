import React, { Component } from 'react';

import Paper from 'material-ui/Paper';

const style = {
  height: 400,
  width: 300,
  margin: 20,
  textAlign: 'left',
  display: 'inline-block'
};

class RelatedArticles extends Component {

    render() {
    return(
        <div>
            <Paper style={style} zDepth={1}>
                <h4>Related Articles</h4>
                <p>
                    <a href="https://google.co.in">Aadhaar data leak report: Editors Guild condemns FIR against journalist</a>
                    <br/><br/>
                    <a href="https://google.co.in">Aadhaar mandatory to avail these services in future</a>
                </p>
            </Paper>
        </div>
    );
    }
}

export default RelatedArticles;