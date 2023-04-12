import './button-primary.styles.scss'

import { FC } from 'react'
import classNames from 'classnames'
import React from 'react'

interface PrimaryButtonProps {
    color: string
    children: React.ReactNode,
    isButton?: boolean
}

const PrimaryButton:FC<PrimaryButtonProps> = ({children , color, isButton}) => {

    const classes = classNames('btn btn--animated', {
        'btn--white': color==='white',
        'btn--green': color==='green'
    })

    if(isButton) {
        return <button className={classes}>{children}</button>
    }

    return <a href="#" className={classes}>{children}</a>
}

export default PrimaryButton