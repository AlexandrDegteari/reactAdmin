import React from 'react';
import axios from 'axios';
import {createContext} from "istanbul-lib-report";
import './sb-admin-2.min.css'
import './Table-module.css'
import {switchCase} from "@babel/types";

export default class Users extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            id: '',
            file: '',
            delete: 'Delete',
            users: [],
            emptyInput: []
        };
        this.onChange = this.onChange.bind(this)

    }


    onChange(e, field) {
        this.setState({
            [field]: e.target.value
        });
    }

    // onChangeImg(event) {
    //     this.setState({
    //         file: event.target.value
    //     });
    // }

    createElementInTable() {


        this.setState({
            users: [...this.state.users, {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                id: this.state.id,
                file: this.state.file,
                delete: this.state.delete
            }]
        });
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            id: '',
            file: ''
        });
        this.setState({emptyInput: []});
        console.log(this.state)
    };

    filter() {
        const {
            firstName,
            lastName,
            email,
            password,
            id,
            file
        } = this.state;

        return firstName.length > 0 &&
            lastName.length > 0 &&
            email.length > 0 &&
            password.length > 0 &&
            id.length > 0 &&
            file.length > 0
    }

    resetButton() {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            id: '',
            file: ''
        })
    }

    // checkInput() {
    //     console.log("test");
    //     const emptyInput = '';
    //     // let lis = [];
    //     switch (emptyInput) {
    //         case this.state.firstName:
    //             this.setState({
    //                 empt: [...this.state.empt, {
    //                     firstNameInput: 'Sorry your First Name is empty',
    //
    //
    //                 }]
    //             });
    //         case this.state.lastName:
    //             this.setState(
    //                 {
    //                     empt: [...this.state.empt, {
    //                         firstNameInput: 'Sorry your First Name is empty',
    //                         lastNameInput: 'Sorry your Last Name is empty',
    //
    //
    //                     }]
    //                 });
    //         case this.state.email:
    //             this.setState([...this.state.empt, {
    //                 firstNameInput: 'Sorry your First Name is empty',
    //                 lastNameInput: 'Sorry your Last Name is empty',
    //                 emailInput: 'Sorry your Email is empty',
    //
    //             }]);
    //         case this.state.password:
    //             this.setState([...this.state.empt, {
    //                 firstNameInput: 'Sorry your First Name is empty',
    //                 lastNameInput: 'Sorry your Last Name is empty',
    //                 emailInput: 'Sorry your Email is empty',
    //                 passwordInput: 'Sorry your Password is empty',
    //
    //             }]);
    //         case this.state.id:
    //             this.setState([...this.state.empt, {
    //                 firstNameInput: 'Sorry your First Name is empty',
    //                 lastNameInput: 'Sorry your Last Name is empty',
    //                 emailInput: 'Sorry your Email is empty',
    //                 passwordInput: 'Sorry your Password is empty',
    //                 idInput: 'Sorry your ID is empty',
    //
    //             }]);
    //
    //     }
    // }

    checkInput() {
        let emptyInput = [];
        if (!this.state.firstName) emptyInput.push("Your First Name is empty");
        if (!this.state.lastName) emptyInput.push("Your Last Name is empty");
        if (!this.state.email) emptyInput.push("Your Email is empty");
        if (!this.state.password) emptyInput.push("Your Password is empty");
        if (!this.state.id) emptyInput.push("Your ID is empty");
        if (!this.state.file) emptyInput.push("Your Image input is empty");

        //
        // switch (empty) {
        //     case this.state.firstName:
        //         emptyInput.push("Your First Name is empty");
        //
        //     case this.state.lastName:
        //         emptyInput.push("Your Last Name is empty");
        //     case this.state.email:
        //         emptyInput.push("Your Email is empty");
        //     case this.state.password:
        //         emptyInput.push("Your Password is empty");
        //     case this.state.id:
        //         emptyInput.push("Your ID is empty");
        //         break;
        // }
        console.log(emptyInput);
        this.setState({emptyInput})
    }


    render() {
        return (
            <div>
                <div>
                    <form className="form-input-user marginInput">
                        <div className="form-row">
                            <div className="form-group col-md">
                                <label htmlFor="firstName">First Name:</label><br/>
                                <input type="text" id="firstName" onChange={(e) => {
                                    this.onChange(e, 'firstName')
                                }} value={this.state.firstName}/>
                            </div>
                            <div className="form-group col-md">
                                <label htmlFor="lastName">Last Name:</label><br/>
                                <input type="text" id="lastName" onChange={(e) => {
                                    this.onChange(e, 'lastName')
                                }} value={this.state.lastName}/>
                            </div>
                        </div>
                        <hr/>
                        <div className="form-row">
                            <div className="form-group col-md-6">

                                <label htmlFor="email">Email:</label><br/>
                                <input type="text" id="email" name="email" onChange={(e) => {
                                    this.onChange(e, 'email')
                                }} value={this.state.email}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Password:</label><br/>
                                <input type="text" id="password" onChange={(e) => {
                                    this.onChange(e, 'password')
                                }} value={this.state.password}/>
                            </div>
                        </div>
                        <hr/>
                        <div className="form-row ">
                            <div className="form-group col-md-6">
                                <label htmlFor="id">Id:</label><br/>
                                <input type="text" id="id" onChange={(e) => {
                                    this.onChange(e, 'id')
                                }} value={this.state.id}/>

                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="img">Image:</label><br/>
                                <input type="text" id={"img"} onChange={(e) => {
                                    this.onChange(e, "file")
                                }} value={this.state.file} placeholder={'Introduceti SRC a imaginii'}/>

                            </div>
                        </div>
                        <hr/>
                        <div className="form-row ">
                            <div className="form-group col-md-6">
                                <button id="addTable" type='reset'
                                        onClick={() => this.filter() ? this.createElementInTable() : this.checkInput()}
                                        className="btn btn-outline-dark marginButtonAddTable">Add Table
                                </button>

                                <button type="reset" value="Reset"
                                        className="btn btn-outline-dark marginButtonReset"
                                        onClick={() => this.resetButton()}>Reset
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    {this.state.emptyInput.map((empty) =>
                        <ul className={'red'}>
                            <li>{empty}</li>
                        </ul>
                    )}
                </div>
                <table id="tableUsers" className="table table-dark table-bordered table-striped">
                    <tbody>
                    {this.state.users.map((user, id) =>
                        <tr key={id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.id}</td>
                            <td><img src={user.file} alt="" id={"imgTable"}/></td>
                            <td>
                                <button onClick={() => this.setState({
                                    users: this.state.users.filter((stateUser) => {
                                        return user.id !== stateUser.id
                                    })
                                })}>{this.state.delete}</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

