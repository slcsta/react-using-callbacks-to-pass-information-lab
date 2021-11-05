import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () => this.props.setSelectedColor(str)
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )
// for click events we have to add an event and provide a callback on the div element itself:
  render() {
    return (
    <div id="colorSelector">
      {this.makeColorSwatches()}
    </div>
    )
  }
}
