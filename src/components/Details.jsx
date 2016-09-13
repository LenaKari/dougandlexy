import React from 'react'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'
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
          <div class="title-banner">
            <h2>Details</h2>
          </div>
        </Row>
        <Row>
          <Jumbotron>
            <Map />
          </Jumbotron>
        </Row>
      </Grid>
    );
  }
}
