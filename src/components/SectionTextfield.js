import React, { Component } from 'react'

export default class SectionNumberPicker extends Component {

    handleTextboxChanged = (event) => {
        this.props.parentCallback(this.props.jsonID, event.target.value)
    }

    render() {
        return (
            <div style={this.props.customStyle}>
                <div id="sectionHeading">{this.props.title}</div>
                <input id="sectionTextfield" onChange={this.handleTextboxChanged}/>
            </div>
        )
    }
}
