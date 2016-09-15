import React from 'react'
import { Jumbotron } from 'react-bootstrap'

export default class Confirmation extends React.Component {
  render() {
    return (
      <Jumbotron class="confirmation">
        <h3>Your RSVP has been submitted</h3>
        <p>If you have any further questions, please contact Doug at <a href="mailto:douglas.paul.ray@gmail.com">douglas.paul.ray@gmail.com</a></p>
        <p>Thank you,<br/>We hope to see you there!</p>
      </Jumbotron>
    );
  }
}
