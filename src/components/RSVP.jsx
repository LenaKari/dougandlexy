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
            <div>
              <p class="main-banner">RSVP</p>
            </div>
            <Jumbotron>
              <form method="post" action="https://getsimpleform.com/messages?form_api_token=ff3c091b5965d22a6e3b406fff833fb2">
                  <input type='hidden' name='redirect_to' value='<http://www.dougandlexy.com>' />

                <div class="form-group">
                  <label for="nameInput">Your Name</label>
                  <input type="text" name="nameInput" id="nameInput" placeholder="Name" class="form-control"/>
                </div>
                <div class="form-group">
                  <label for="guestInput">Guest</label>
                  <input type="text" name="guestInput" id="guestInput" placeholder="Name of guest" class="form-control"/>
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
                  <textarea id="comments" name="comments" placeholder="Please let us know if you have any dietary needs or access requirements." class="form-control"></textarea>
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
