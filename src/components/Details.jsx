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
          <p>Beechwood Hotel<br/>363 Plantation Street<br/>Worcester, MA 01605</p>
          <p>Website: <a href="http://www.beechwoodhotel.com" target="_blank">beechwoodhotel.com</a><br/>Phone: (508) 754-5789</p>
          <Map />
        </Row>
      </Grid>
    );
  }
}
