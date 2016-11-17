import React from 'react'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'

export default class EmailForm extends React.Component {
	constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
		return (
      <Grid>
        <Row>
          <Col>
            <div>
              <p class="main-banner">Photos</p>
            </div>
            <Jumbotron class="email-form">
              <h4>To request access to our photo album, please submit your name and email address.</h4>
              <form method="post" action="https://getsimpleform.com/messages?form_api_token=ff3c091b5965d22a6e3b406fff833fb2">
                <input type='hidden' name='redirect_to' value='http://www.dougandlexy.com/#confirmed'/>
                <div class="form-group">
                  <label for="nameInput">Name</label>
                  <input type="text" name="nameInput" id="nameInput" placeholder="Name" class="form-control"/>
                </div>
                <div class="form-group">
                  <label for="emailInput">Email</label>
                  <input type="text" name="emailInput" id="emailInput" placeholder="Email address" class="form-control"/>
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
