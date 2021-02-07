import React, {Component} from 'react'
import s from './Layout.module.scss'
import Header from "../../components/Header/Header";

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
                <Header
                    menu={this.state.menu}
                    toggleMenu={this.toggleMenuHandler}
                    closeMenu={this.closeMenuHandler}
                />
                <main className={s.wrapper}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout