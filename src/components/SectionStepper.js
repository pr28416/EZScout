import React, { Component } from 'react'

export default class SectionStepper extends Component {

    constructor() {
        super()
        this.state = {
            currentStep: 0
        }
    }

    incrementStep = () => {
        this.props.parentCallback(this.props.jsonID, this.state.currentStep + 1)
        this.setState({currentStep: this.state.currentStep + 1})
    }
    
    decrementStep = () => {
        this.props.parentCallback(this.props.jsonID, this.state.currentStep - 1)
        this.setState({currentStep: Math.max(0, this.state.currentStep - 1)})
    }

    render() {
        return (
            <div style={this.props.customStyle}>
                <div id="sectionHeading">{this.props.title}</div>
                <div id="sectionStepperContents">
                    <button id="sectionStepperButton" onClick={this.decrementStep}>–</button>
                    <div style={{margin: "auto 12px", fontSize: "36px"}}>{this.state.currentStep}</div>
                    <button id="sectionStepperButton" onClick={this.incrementStep}>+</button>
                </div>
            </div>
        )
    }
}
