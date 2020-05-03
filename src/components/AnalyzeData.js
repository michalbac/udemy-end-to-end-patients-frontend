import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class AnalyzeData extends React.Component {

    state = {
        clinicalData: []
    }

    componentWillMount() {
        Axios.get('http://localhost:8080/clinicalservices/api/patients/analyze/'
            + this.props.match.params.patientId).then(response => {this.setState(response.data)
            })
    }
    render() {
        return (<div>
            <h2>Patient Details</h2>
            <b>First Name:</b> {this.state.firstName}<br/>
            <b>Last Name:</b> {this.state.lastName}<br/>
            <b>Age:</b> {this.state.age}<br/>
            <h2>Clinical Report:</h2>
            {this.state.clinicalData.map(eachEntry=><TableCreator item={eachEntry} patientId={this.state.id}></TableCreator>)}<br/>
            <Link to={'/'}>Go Back</Link>
        </div>)
    }
}

class TableCreator extends React.Component {
    render() {
        var eachEntry = this.props.item
        var patientId = this.props.patientId
        return <div>
            <table id="t01" align="center">
    <tr>
        <td id="td01"><b>{eachEntry.componentName}</b></td>
        </tr>
        <tr>
            <td width="20%">{eachEntry.componentName}</td>
            <td width="30%">{eachEntry.componentValue}</td>
            <td width="50%">{new Date(eachEntry.measuredDateTime).toDateString()}</td>
            </tr>
            </table>
        </div>
    }
}

export default AnalyzeData;