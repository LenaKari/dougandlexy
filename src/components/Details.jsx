import React from 'react'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'
import Title from './Title'
import Map from './Map'

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Details",
    };
  }
  render() {
    return (
      <Grid>
        <Row>
          <Jumbotron>
            <h2>Details</h2>
          </Jumbotron>
        </Row>
        <Row>
          <Map />
        </Row>
      </Grid>
    );
  }
}
