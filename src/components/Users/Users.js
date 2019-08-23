import React from 'react';
import axios from 'axios';

export default class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            id: '',
            users: []
        }


    }

    onChange(e, field) {
        this.setState({
            [field]: e.target.value
        });
    }

    createElementInTable = () =>  {
        this.state.users.push({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            id: this.state.id
        })
    };

    render() {
        return (
            <div>
                <div>
                    <form className="form-input-user marginInput">
                        <div className="form-row">
                            <div className="form-group col-md">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" id="firstName" onChange={(e) => {
                                    this.onChange(e, 'firstName')
                                }} value={this.state.firstName}/>
                            </div>
                            <div className="form-group col-md">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" id="lastName" onChange={(e) => {
                                    this.onChange(e, 'lastName')
                                }} value={this.state.lastName}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">

                                <label htmlFor="email">Email:</label>
                                <input type="text" id="email" name="email" onChange={(e) => {
                                    this.onChange(e, 'email')
                                }} value={this.state.email}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Password:</label>
                                <input type="text" id="password" onChange={(e) => {
                                    this.onChange(e, 'password')
                                }} value={this.state.password}/>
                            </div>
                        </div>

                        <div className="form-row ">
                            <div className="form-group col-md-6">
                                <label htmlFor="id">Id:</label>
                                <input type="tel" id="id" onChange={(e) => {
                                    this.onChange(e, 'id')
                                }} value={this.state.id}/>

                            </div>

                            <button id="addTable" type="reset" value="Reset" onClick={this.createElementInTable}
                                    className="btn btn-outline-dark marginButtonAddTable">Add Table
                            </button>

                            <button type="reset" value="Reset"
                                    className="btn btn-outline-dark marginButtonReset">Reset
                            </button>


                        </div>
                    </form>
                </div>
                <table id="tableUsers" className="table table-dark table-bordered table-striped">
                    {this.state.users.map((user) =>
                        <tr>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.id}</td>
                        </tr>)
                    }
                </table>
            </div>

        )

    }

}

