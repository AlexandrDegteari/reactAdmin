import React from 'react';
import axios from 'axios';
import {NavLink} from "react-router-dom";
import s from './Register.module.css';

const Registration = (props) => {
    let path = "/register/" + props.id;

    return <div className={s.reg + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};


export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            text: 'text'
        }
    }

    onChange(e, field) {
         this.setState({
             [field]: e.target.value
         });
    }
    submit() {
        axios.post("http://localhost:8100/users/register", {username: this.state.username, password:this.state.password, email:this.state.email}).then(response => console.log(response))
        this.setState({show:!this.state.show});
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <form className={'form'}>
                    <input placeholder={'Username'} onChange={(e) => {this.onChange(e, 'username')}} value={this.state.username} type="text"/>
                    <input placeholder={'Email'}  onChange={(e) => {this.onChange(e, 'email')}} value={this.state.email} type="email"/>
                    <input placeholder={'Password'}  onChange={(e) => {this.onChange(e, 'password')}} value={this.state.password} type="password"/>
                    {/*<input placeholder={'Confirm Password'} type="password"/>*/}
                    <button onClick={() => this.submit()} type='button'>submit</button>
                    {this.state.username.length && this.state.email.length && this.state.password.length >0 ?  <p>{this.state.text}</p> : null}
                </form>
            </div>
        );
    }
}

