import './button-primary.styles.scss'

import { FC } from 'react'
import classNames from 'classnames'

interface PrimaryButtonProps {
    colorClass: string
}

const PrimaryButton:FC<PrimaryButtonProps> = ({colorClass}) => {

    const classes = classNames('btn btn--animated', colorClass)

    return <a href="#" className={classes}>Discover our tours</a>
}

export default PrimaryButton