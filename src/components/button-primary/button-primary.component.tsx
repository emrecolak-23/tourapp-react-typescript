import './button-primary.styles.scss'

import { FC } from 'react'
import classNames from 'classnames'
import React from 'react'

interface PrimaryButtonProps {
    color: string
    children: React.ReactNode
}

const PrimaryButton:FC<PrimaryButtonProps> = ({children , color}) => {

    const classes = classNames('btn btn--animated', {
        'btn--white': color==='white',
        'btn--green': color==='green'
    })

    return <a href="#" className={classes}>{children}</a>
}

export default PrimaryButton