import React, {Component} from 'react'
import s from './Layout.module.scss'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })

    }

    closeMenuHandler = () => {
        this.setState({
            menu: false
        })

    }

    render() {
        return(
            <div className={s.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    closeMenu={this.closeMenuHandler}
                />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main className={s.wrapper}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout