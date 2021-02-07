import React from 'react'
import s from './Header.module.scss';
import Drawer from "../Navigation/Drawer/Drawer";
import MenuToggle from "../Navigation/MenuToggle/MenuToggle";
import logo from './../../img/logo.svg'
import {Link} from "react-router-dom";

const Header = props => {
    return(
        <header className={s.Header}>
            <Drawer
                isOpen={props.menu}
                closeMenu={props.closeMenu}
            />
            <MenuToggle
                onToggle={props.toggleMenu}
                isOpen={props.menu}
            />
            <Link to='/'>
                <img src={logo} alt="logo"/>
            </Link>
        </header>
    )
}

export default Header