import React from 'react';
import axios from 'axios';
import {NavLink} from "react-router-dom";
import s from './Profile.module.css';

const ProfilePage = (props) => {
    let path = "/login/" + props.id;

    return <div className={s.prof + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        console.log(props, 'props');
        this.state = {
            username: '',
            email: '',
            password: '',
            text: 'text'
        }
    }
    // axios.get(`http://localhost:8100/users/`, {headers: {authorization: 'Bearer ' + header}}).then(res => console.log(res))

   componentDidMount() {
        let  {username} = this.props.history.location.state;
        const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU2NjU0ODM1N30.9Rj_x0oSKvDKUFVn-Re1NMljbg_u_Z7H_4ohMm0hSLA';
      axios.get(`http://localhost:8100/users/${username}`, {headers: {authorization: 'Bearer ' + header}}).then(res => this.setState({username: res.data[0].name, email: res.data[0].email }))
   }


    render() {
        return (
            <div>
                <h2>Welcome to your profile page {this.state.username}</h2>
                {this.state.email}
            </div>
        );
    }
}
