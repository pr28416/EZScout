import React, { Component } from 'react'

export default class SectionToggle extends Component {
    handleButtonToggled = (event) => {
        this.props.parentCallback(this.props.jsonID, event.target.checked)
    }

    render() {
        return (
            <div style={this.props.customStyle}>
                <div id="sectionHeading">{this.props.title}</div>
                <input type="checkbox" id="sectionToggle" onChange={this.handleButtonToggled}/>
            </div>
        )
    }
}
