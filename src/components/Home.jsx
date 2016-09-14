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
            <p class="main-banner">Alexandria Sparks & Douglas Ray</p>
          </div>
          <Jumbotron>
            <Carousel>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/src/img/1.jpg"/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/src/img/2.jpg"/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/src/img/3.jpg"/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/src/img/4.jpg"/>
              </Carousel.Item>
            </Carousel>
          </Jumbotron>
          <p class="main-banner">Please join us on our special day...</p>
        </Row>
      </Grid>
    );
  }
}
