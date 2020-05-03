import React from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

toast.configure();

class AddPatient extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        const data ={
            firstName:this.firstName,
            lastName:this.lastName,
            age:this.age
        }
        axios.post('http://localhost:8080/clinicalservices/api/patients', data)
        .then(response=>{
            toast("Patient added successfully!",{autoClose:2000, position:toast.POSITION.BOTTOM_CENTER})
            
        })
    }

    render() {
        return (<div class="container">
            <h2>Create Patient:</h2>
            <form>
                First name: <input type="text" name="firstName" onChange={(event => this.firstName = event.target.value)}></input><br></br>
                Last name: <input type="text" name="lastName" onChange={(event => this.lastName = event.target.value)}></input><br></br>
                Age: <input type="text" name="age" onChange={(event => this.age = event.target.value)}></input><br></br>
                <button class="button" onClick={this.handleSubmit.bind(this)}>Confirm</button>
            </form><br></br>
            <Link to={'/'}>Go Back</Link>
        </div>)
    }
}

export default AddPatient;