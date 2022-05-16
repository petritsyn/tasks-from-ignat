import React from 'react'
import {NavLink} from "react-router-dom";
import { PATH } from './Pages';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            {/*add NavLinks*/}
            <NavLink to={PATH.PRE_JUNIOR} className={({ isActive }) => isActive ? s.activeLink : s.link}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({ isActive }) => isActive ? s.activeLink : s.link}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({ isActive}) => isActive ? s.activeLink : s.link}>Junior+</NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default Header

/*
style={ ({isActive}) => ({color: isActive ? s.activeLink : s.link}) }*/






