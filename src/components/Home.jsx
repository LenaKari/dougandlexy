import React from 'react'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'
import Title from './Title'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home",
    };
  }
  render() {
    return (
      <Grid>
        <Row>
          <Jumbotron>
            <Title title={this.state.title} />
          </Jumbotron>
        </Row>
      </Grid>
    );
  }
}
