import React from 'react'

export default class Map extends React.Component {
  render() {
    return (
      <div class="gmap">
        <div class="hotel-info">
          <p>Beechwood Hotel<br/>363 Plantation Street<br/>Worcester, MA 01605</p>
          <p>Website: <a href="http://www.beechwoodhotel.com" target="_blank">beechwoodhotel.com</a><br/>Phone: (508) 754-5789</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAxrbFPGGhD6btCIgjZmvKOVsf6k8ppJHk &q=363+Plantation+St+Worcester+MA+01605&zoom=10"
          allowFullScreen>
        </iframe>
      </div>
    );
  }
}
