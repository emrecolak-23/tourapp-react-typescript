import './footer-link.styles.scss'
import React, { FC } from 'react'

interface FooterLinkProp {
    children?: React.ReactNode
}

const FooterLink:FC<FooterLinkProp> = ({children})  => {
    return (
        <a href="#" className='footer__link'>{children}</a>
    )
}

export default FooterLink