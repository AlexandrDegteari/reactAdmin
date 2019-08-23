import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/login" activeClassName={s.activeLink}>Login</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/register" activeClassName={s.activeLink}>Register</NavLink>
            </div>
            {/*<div className={s.item}>*/}
                {/*<a>News</a>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
                {/*<a>Music</a>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
                {/*<a>Settings</a>*/}
            {/*</div>*/}
        </nav>
    )
};

export default Navbar;