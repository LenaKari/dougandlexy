import React from 'react'

export default class Map extends React.Component {
  render() {
    return (
      <div class="gmap">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAxrbFPGGhD6btCIgjZmvKOVsf6k8ppJHk &q=363+Plantation+St+Worcester+MA+01605&zoom=14"
          allowFullScreen>
        </iframe>
      </div>
    );
  }
}
