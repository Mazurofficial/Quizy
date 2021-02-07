import React from 'react'
import s from './Loader.module.scss'

const Loader = props => {
    return(
        <div className={s.wrapper}>
            <div className={s.Loader}/>
        </div>
    )
}

export default Loader