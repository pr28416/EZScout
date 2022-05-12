import React, { Component } from 'react'
import '../css/ScoutMatchPage.css'

export default class SectionTextarea extends Component {

    handleTextboxChanged = (event) => {
        this.props.parentCallback(this.props.jsonID, event.target.value)
    }

    render() {
        return (
            <div style={this.props.customStyle}>
                <div id="sectionHeading">{this.props.title}</div>
                <textarea id="sectionTextarea" onChange={this.handleTextboxChanged}/>
            </div>
        )
    }
}
