import React, { Component } from 'react'
import '../css/ScoutMatchPage.css'

export default class SectionDropdown extends Component {

    handleItemSelected = (event) => {
        this.props.parentCallback(this.props.jsonID, event.target.value)
    }

    render() {
        return (
            <div style={this.props.customStyle}>
                <div id="sectionHeading">{this.props.title}</div>
                <select id="sectionDropdown" onChange={this.handleItemSelected} defaultValue={this.props.items.length > 0 ? this.props.items[0] : null}>
                    {this.props.items.map((elem, idx) => <option key={`${idx} ${elem}`} value={elem}>{elem}</option>)}
                </select>
            </div>
        )
    }
}
