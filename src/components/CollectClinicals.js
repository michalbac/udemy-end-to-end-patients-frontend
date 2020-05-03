import React from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

class CollectClinicals extends React.Component {

    state = {}

    componentWillMount() {
        Axios.get('http://localhost:8080/clinicalservices/api/patients/' + this.props.match.params.patientId)
            .then(response => {
                this.setState(response.data)
            })
    }

    handleSubmit(event){
        event.preventDefault();
        const data = {
            patientId:this.props.match.params.patientId,
            componentName:this.componentName,
            componentValue:this.componentValue
        }
        Axios.post('http://localhost:8080/clinicalservices/api/clinicals/', data)
        .then(response=>{
            toast("Patient Data Saved Successfully!",{autoClose:3000, position:toast.POSITION.BOTTOM_CENTER})
        })


    }

    render() {
        return (<div>
            <h2>Patient Details:</h2>
            <b>First Name:</b> {this.state.firstName}<br/>
            <b>Last Name:</b>{this.state.lastName}<br/>
            <b>Age: </b>{this.state.age}<br/>
            <h2>Patient Clinical Data:</h2>
            <form>
                Clinical Entry Type <select onChange={(event)=>{this.componentName=event.target.value}}>
                    <option>Select one</option>
                    <option value="bp">Blood Pressure (Sys/Dys)</option>
                    <option value="hw">Height/Weight</option>
                    <option value="heartRate">Heart Rate</option>
                </select>
                Value: <input type="text" name="componentValue" onChange={(event)=>{this.componentValue=event.target.value}}></input><br/>
                <button class="button" onClick={this.handleSubmit.bind(this)}>Confirm</button>
            </form>
            <br></br>
            <Link to={'/'}>Go Back</Link>
        </div>)
    }
}

export default CollectClinicals;