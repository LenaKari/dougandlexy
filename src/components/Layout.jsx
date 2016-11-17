import React from 'react'
import { IndexLink } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'
import Header from './Header'
import Home from './Home'
import EmailForm from './EmailForm'

export default class Layout extends React.Component {
  render() {
    return (
      <Grid>
        <Header />
        <Row class="content">
          {this.props.children}
        </Row>
      </Grid>
    );
  }
}
