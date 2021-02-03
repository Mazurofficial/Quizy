import React,{Component,Fragment} from 'react'
import s from './Drawer.module.scss'
import Backdrop from "../Backdrop/Backdrop";

const links = [
    1,2,3
]

class Drawer extends Component{

    renderLinks = () => {
        return(
            links.map((link,index)=>{
                return(
                    <li key={index}>
                        <a href="#">Link {link}</a>
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
