import React,{Component,Fragment} from 'react'
import s from './Drawer.module.scss'
import Backdrop from "../Backdrop/Backdrop";
import {NavLink} from "react-router-dom";

const links = [
    {to: '/', label: 'List', exact: true},
    {to: '/auth', label: 'Authentication', exact: false},
    {to: '/quiz-creator', label: 'Quiz-creator', exact: false}
]

class Drawer extends Component{

    // clickHandler = () => {
    //     this.props.closeMenu()
    // }

    renderLinks = () => {
        return(
            links.map((link,index)=>{
                return(
                    <li key={index}>
                        <NavLink
                            to={link.to}
                            exact={link.exact}
                            activeClassName={s.active}
                            //onClick={this.clickHandler}
                            onClick={this.props.closeMenu}
                        >
                            {link.label }
                        </NavLink>
                    </li>
                )
            })
        )
    }

    render() {
        let classes = [
            s.Drawer
        ]

        if(!this.props.isOpen){
            classes.push(s.close)
        }
        return(
            <Fragment>
                <nav className={classes.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.closeMenu} /> : null}
            </Fragment>
        )
    }
}

export default Drawer
