import React from 'react'
import { Grid, Row, Col, Jumbotron, Carousel } from 'react-bootstrap'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home",
    };
  }
  render() {
    return (
      <Grid>
        <Row>
          <div>
            <p class="title-banner">Alexandria Sparks & Douglas Ray</p>
          </div>
          <Jumbotron>
            <Carousel>
              <Carousel.Item>
                <img src="/src/img/1.jpg"/>
              </Carousel.Item>
              <Carousel.Item>
                <img src="/src/img/2.jpg"/>
              </Carousel.Item>
              <Carousel.Item>
                <img src="/src/img/3.jpg"/>
              </Carousel.Item>
              <Carousel.Item>
                <img src="/src/img/4.jpg"/>
              </Carousel.Item>
            </Carousel>
          </Jumbotron>
          <p class="main-banner">Please join us on our special day...</p>
        </Row>
      </Grid>
    );
  }
}
