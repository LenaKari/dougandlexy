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
          <Jumbotron>
            <Carousel>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://placehold.it/900x500"/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://placehold.it/900x500"/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://placehold.it/900x500"/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://placehold.it/900x500"/>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://placehold.it/900x500"/>
              </Carousel.Item>
            </Carousel>
          </Jumbotron>
        </Row>
      </Grid>
    );
  }
}
