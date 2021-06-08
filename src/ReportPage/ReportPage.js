import React, { Component } from 'react'
import ReportContext from '../ReportContext'
import './ReportPage.css'

class ReportPage extends Component {
    static contextType = ReportContext;

    

    render(){
        const { reports=[] } = this.context;
        const { pt_id } = this.props.match.params
        const ptId = parseInt(pt_id)


        const findReport = (reports=[], ptId) =>
             reports.find(report => report.pt_id === ptId)
        

        const chosenReport = findReport(reports, ptId)
        console.log(chosenReport)

    return (
        <div className='full-report-container'>
            <div className='full-report-tab'>
                <p>Room {chosenReport.room_number}</p>
            </div>
            <ul className='full-report'>
                <h3>Patient Info:</h3>
            <li>Room Number: {chosenReport.room_number}</li>
            <li>Patient Initials: {chosenReport.pt_initials}</li>
            <li>Diagnosis: {chosenReport.diagnosis}</li>
            <li>Allergies: {chosenReport.allergies}</li>

            <h3>Neuro:</h3>
            <li>Alert and Oriented: {chosenReport.A_O}</li>
            <li>Pupils: {chosenReport.pupils}</li>

            <h3>Cardiac:</h3>
            <li>Rhythm: {chosenReport.heart_rhythm}</li>
            <li>Blood Pressure: {chosenReport.BP}</li>
            <li>Edema: {chosenReport.edema}</li>

            <h3>Respiratory:</h3>
            <li></li>
    </ul>
        </div>
    )
    }
}

export default ReportPage
