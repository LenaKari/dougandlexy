import React from 'react'
import { Jumbotron } from 'react-bootstrap'

export default class Confirmation extends React.Component {
  render() {
    return (
      <Jumbotron class="confirmation">
        <h3>Your request has been sent</h3>
        <p>A link to the google photo album will be sent to you shortly</p>
      </Jumbotron>
    );
  }
}
