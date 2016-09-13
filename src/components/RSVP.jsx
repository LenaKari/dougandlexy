import React from 'react'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'

export default class RSVP extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
		return (
      <Grid>
        <Row>
          <Col>
            <div class="title-banner">
              <h2>RSVP</h2>
            </div>
            <Jumbotron>
              <form method="post" action="rsvp.php">
                <div class="form-group">
                  <label for="nameInput">Your Name</label>
                  <input type="text" id="nameInput" placeholder="Name" class="form-control"/>
                </div>
                <div class="form-group">
                  <label for="guestInput">Guest</label>
                  <input type="text" id="guestInput" placeholder="Name of guest" class="form-control"/>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" id="attending" value="attending" name="rsvp-radio"/>
                    Accepts with pleasure
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" id="declined" value="declined" name="rsvp-radio"/>
                    Regretfully declines 
                  </label>
                </div>
                <div class="form-group">
                  <label for="comments">Notes</label>
                  <textarea id="comments" placeholder="Please let us know if you have any dietary needs or access requirements." class="form-control"></textarea>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
              </form>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
}
