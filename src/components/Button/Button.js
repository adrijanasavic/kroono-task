import React from 'react'
import style from './style.module.css'

const Button = (props) => {

    return (
            <button className={style.button} onClick={props.clicked}>
                {props.children}
            </button>
    )
}

export default Button