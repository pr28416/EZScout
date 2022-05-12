import React, { Component } from 'react'
import QRCode from 'react-qr-code'
import Section from '../components/Section'
import SectionDropdown from '../components/SectionDropdown'
import SectionTextfield from '../components/SectionTextfield'
import SectionStepper from '../components/SectionStepper'
import SectionTextarea from '../components/SectionTextarea'
import SectionToggle from '../components/SectionToggle'
import "../css/ScoutMatchPage.css"

const mp = {
    scouterInitials: "sct",
    driverStation: "dst",
    teamNumber: "tn",
    matchNumber: "m",
    startingPosition: "sp",
    didTaxi: "dt",
    autoUpperCargoScored: "aucs",
    autoUpperCargoMissed: "aucm",
    autoLowerCargoScored: "alcs",
    autoLowerCargoMissed: "alcm",
    autoFouls: "af",
    autoTechFouls: "at",
    teleopUpperCargoScored: "tucs",
    teleopUpperCargoMissed: "tucm",
    teleopLowerCargoScored: "tlcs",
    teleopLowerCargoMissed: "tlcm",
    teleopFouls: "tf",
    teleopTechFouls: "tt",
    playedDefense: "pd",
    wasDefended: "wd",
    climb: "cl",
    timeToClimb: "tc",
    driverSkill: "dsk",
    playDefenseRating: "pdr",
    resistDefenseRating: "rdr",
    comments: "cm"
}

export default class ScoutMatchPage extends Component {

    constructor() {
        super()
        this.state = {
            scouterInitials: "",
            driverStation: "Red 1",
            teamNumber: "",
            matchNumber: "",
            startingPosition: "Against fender",
            didTaxi: false,
            autoUpperCargoScored: 0,
            autoUpperCargoMissed: 0,
            autoLowerCargoScored: 0,
            autoLowerCargoMissed: 0,
            autoFouls: 0,
            autoTechFouls: 0,
            teleopUpperCargoScored: 0,
            teleopUpperCargoMissed: 0,
            teleopLowerCargoScored: 0,
            teleopLowerCargoMissed: 0,
            teleopFouls: 0,
            teleopTechFouls: 0,
            playedDefense: false,
            wasDefended: false,
            climb: "Did not attempt",
            timeToClimb: 0,
            driverSkill: "Not observed",
            playDefenseRating: "Not observed",
            resistDefenseRating: "Not observed",
            comments: "",
            IS_QR_CODE_VISIBLE: false
        }
    }

    generateQRCode = () => {
        let obj = this.state
        obj.IS_QR_CODE_VISIBLE = true
        this.setState(obj)
    }

    qrCodeContainer = () => {
        let data = {}
        for (let key in mp) {
            data[mp[key]] = this.state[key]
        }
        return (
            <div style={{display: "grid", margin: "8px", justifyContent: "center"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "8px auto"}}>
                    <QRCode value={JSON.stringify(data)}></QRCode>
                </div>
                <button style={{padding: "12px", backgroundColor: "#383838", color: "white", border: "none", borderRadius: "10px", fontSize: "18px", fontWeight: "bold"}} onClick={() => {
                    const obj = this.state
                    obj["IS_QR_CODE_VISIBLE"] = false
                    this.setState(obj)
                }}>Done</button>
            </div>
        )
    }

    componentCallback = (elementName, elementValue) => {
        const obj = this.state
        obj[elementName] = elementValue
        this.setState(obj)
    }
    
    render() {
        // console.log("ScoutMatchPage render:", this.state)
        return (
            <div id="ScoutMatchPageElements">
                {/* Prematch */}
                <Section sectionTitle="Prematch" elements={(<div>
                    <div style={{display: "flex"}}>
                        {/* Scouter initials */}
                        <SectionTextfield title="Scouter initials" jsonID="scouterInitials" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginRight": "6px"}}/>
                        {/* Team number */}
                        <SectionTextfield title="Team number" jsonID="teamNumber" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginLeft": "6px"}}/>
                    </div>
                    <div style={{display: "flex"}}>
                        {/* Match number */}
                        <SectionTextfield title="Match number" jsonID="matchNumber" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginRight": "6px"}}/>
                        {/* Driver station */}
                        <SectionDropdown items={["Red 1", "Red 2", "Red 3", "Blue 1", "Blue 2", "Blue 3"]} title="Driver station" jsonID="driverStation" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginLeft": "6px"}}/>
                    </div>
                </div>)}/>
                {/* Auto */}
                <Section sectionTitle="Auto" elements={(<div>
                    <div style={{display: "flex"}}>
                        {/* Starting position */}
                        <SectionDropdown title="Starting position" items={["Against fender", "Closest to guardrail", "Middle", "Closest to hangar"]} jsonID="startingPosition" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginRight": "6px"}}/>
                        {/* Taxied? */}
                        <SectionToggle title="Taxied?" jsonID="didTaxi" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginLeft": "6px"}}/>
                    </div>
                    <div style={{display: "flex"}}>
                        {/* Auto upper cargo scored */}
                        <SectionStepper title="Upper cargo scored" jsonID="autoUpperCargoScored" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginRight": "6px", "color": "green"}}/>
                        {/* Auto upper cargo missed */}
                        <SectionStepper title="Upper cargo missed" jsonID="autoUpperCargoMissed" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginLeft": "6px", "color": "red"}}/>
                    </div>
                    <div style={{display: "flex"}}>
                        {/* Auto lower cargo scored */}
                        <SectionStepper title="Lower cargo scored" jsonID="autoLowerCargoScored" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginRight": "6px", "color": "green"}}/>
                        {/* Auto lower cargo missed */}
                        <SectionStepper title="Lower cargo missed" jsonID="autoLowerCargoMissed" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginLeft": "6px", "color": "red"}}/>
                    </div>

                    <div style={{display: "flex"}}>
                        {/* Auto fouls */}
                        <SectionStepper title="Fouls" jsonID="autoFouls" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginRight": "6px"}}/>
                        {/* Auto tech fouls */}
                        <SectionStepper title="Tech fouls" jsonID="autoTechFouls" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginLeft": "6px"}}/>
                    </div>
                </div>)}/>
                {/* Teleop */}
                <Section sectionTitle="Teleop" elements={(<div>
                    <div style={{display: "flex"}}>
                        {/* Teleop upper cargo scored */}
                        <SectionStepper title="Upper cargo scored" jsonID="teleopUpperCargoScored" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginRight": "6px", "color": "green"}}/>
                        {/* Teleop upper cargo missed */}
                        <SectionStepper title="Upper cargo missed" jsonID="teleopUpperCargoMissed" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginLeft": "6px", "color": "red"}}/>
                    </div>
                    <div style={{display: "flex"}}>
                        {/* Teleop lower cargo scored */}
                        <SectionStepper title="Lower cargo scored" jsonID="teleopLowerCargoScored" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginRight": "6px", "color": "green"}}/>
                        {/* Teleop lower cargo missed */}
                        <SectionStepper title="Lower cargo missed" jsonID="teleopLowerCargoMissed" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginLeft": "6px", "color": "red"}}/>
                    </div>
                    
                    <div style={{display: "flex"}}>
                        {/* Played defense? */}
                        <SectionToggle title="Played defense?" jsonID="playedDefense" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginRight": "6px"}}/>
                        {/* Was defended? */}
                        <SectionToggle title="Was defended?" jsonID="wasDefended" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginLeft": "6px"}}/>
                    </div>

                    <div style={{display: "flex"}}>
                        {/* Teleop fouls */}
                        <SectionStepper title="Fouls" jsonID="teleopFouls" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginRight": "6px"}}/>
                        {/* Teleop tech fouls */}
                        <SectionStepper title="Tech fouls" jsonID="teleopTechFouls" parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginLeft": "6px"}}/>
                    </div>
                    
                </div>)}/>
                {/* Endgame */}
                <Section sectionTitle="Endgame" elements={(<div>
                    {/* Climb */}
                    <SectionDropdown title="Climb" jsonID="climb" items={["Did not attempt", "Attempted but failed", "Low", "Mid", "High", "Traversal", "Free traversal points from G208"]} parentCallback={this.componentCallback}/>
                    {/* Time to climb */}
                    <SectionTextfield title="Time to climb (sec)" jsonID="timeToClimb" parentCallback={this.componentCallback}/>
                </div>)}/>
                {/* Postmatch */}
                <Section sectionTitle="Postmatch" elements={(<div>

                    {/* Driver skill */}
                    <SectionDropdown title="Driver skill" jsonID="driverSkill" items={["Not observed", "Poor", "Average", "Effective"]} parentCallback={this.componentCallback}/>

                    <div style={{display: "flex"}}>
                        {/* Playing defense rating */}
                        <SectionDropdown title="Play defense rating" jsonID="playDefenseRating" items={["Not observed", "Poor", "Average", "Effective"]} parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginRight": "6px"}}/>
                        {/* Resisting defense rating */}
                        <SectionDropdown title="Resist defense rating" jsonID="resistDefenseRating" items={["Not observed", "Poor", "Average", "Effective"]} parentCallback={this.componentCallback} customStyle={{"width": "100%", "marginLeft": "6px"}}/>
                    </div>

                    {/* Comments */}
                    <SectionTextarea title="Comments" jsonID="comments" parentCallback={this.componentCallback}/>
                    
                    {/* Generate QR code */}
                    <button id="generateQRCodeButton" onClick={this.generateQRCode}>Generate QR code</button>

                    {/* QR code */}
                    {this.state.IS_QR_CODE_VISIBLE ? this.qrCodeContainer() : null}
                </div>)}/>
            </div>
        )
    }
}
