import './button-primary.styles.scss'

import { FC } from 'react'
import classNames from 'classnames'
import React from 'react'

interface PrimaryButtonProps {
    colorClass: string
    children: React.ReactNode
}

const PrimaryButton:FC<PrimaryButtonProps> = ({children , colorClass}) => {

    const classes = classNames('btn btn--animated', colorClass)

    return <a href="#" className={classes}>{children}</a>
}

export default PrimaryButton