import React, { Component } from 'react'
import "../css/SectionTitle.css"

export default class Section extends Component {
  render() {
    return (
      <div id="sectionContainer">
        {/* Section title */}
        <div id="sectionTitle">{this.props.sectionTitle}</div>
        {/* Section body */}
        <div id="sectionBody">
          {this.props.elements}
        </div>
      </div>
    )
  }
}
