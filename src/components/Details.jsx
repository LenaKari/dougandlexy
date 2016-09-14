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
          <div>
            <p class="main-banner">Details</p>
          </div>
        </Row>
        <Row>
          <Jumbotron>
            <h3>Where and When</h3>
            <p>The wedding will take place on the 21st of October at Beechwood Hotel in Worcester, Massachusetts. The ceremony will begin at 5:30pm, immediately followed by the reception. Information about the venue can be found below.</p>
            <h3>Registry / Gifts</h3>
            <p>Because Doug and Lexy will be returning to Scotland after the wedding, they respectfully ask that no gifts are brought. Your love and presence are all that is needed, but if you wish to make a cash gift to help them with the cost of Douglas immigrating to the UK, there will be a box at the reception, where you can anonymously give an amount that you feel comfortable with.</p>
            <h3>Dinner</h3>
            <p>Cocktails and hors d'oeuvres will be served at 6:00pm, with a buffet dinner to follow at 7:00pm. If you have any special dietary requirements, please let us know in the notes section when submitting your RSVP.</p>
            <h3>Hotel Rooms</h3>
            <p>A block of rooms has been reserved at the hotel. To reserve a room, please contact the hotel directly at 508-754-5789 before October 7th, and indicate that you are with the Sparks/Ray wedding. As only a limited number of rooms remain unoccupied, these are available on a first-come, first-served basis.</p>
            <h3>Venue Information</h3>
            <p>Beechwood Hotel<br/>363 Plantation Street<br/>Worcester, MA 01605</p>
            <p>Website: <a href="http://www.beechwoodhotel.com" target="_blank">beechwoodhotel.com</a><br/>Phone: (508) 754-5789</p>
            <Map />
          </Jumbotron>
        </Row>
      </Grid>
    );
  }
}
