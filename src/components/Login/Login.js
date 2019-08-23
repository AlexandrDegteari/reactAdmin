import React from 'react';
import axios from 'axios';
import {NavLink} from "react-router-dom";
import s from './Login.module.css';

const LoginPage = (props) => {
    let path = "/login/" + props.id;

    return <div className={s.log + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};
export default class Login extends React.Component {
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
        axios.post("http://localhost:8100/users/authenticate", { email:this.state.email, password:this.state.password}).then(response => {
            console.info(`response--->`, response);
            alert('Success')
        }).catch(function (error) { alert('error');
        });
        this.props.history.push('/profile', {username: this.state.username})
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form className={'form'}>
                    <input placeholder={'Email'}  onChange={(e) => {this.onChange(e, 'email')}} value={this.state.email} type="email"/>
                    <input placeholder={'Password'}  onChange={(e) => {this.onChange(e, 'password')}} value={this.state.password} type="password"/>
                    <button onClick={() => this.submit()} type='button'>submit</button>
                    {this.state.username.length && this.state.email.length && this.state.password.length >0 ?  <p>{this.state.text}</p> : null}
                </form>
            </div>
        );
    }
}

