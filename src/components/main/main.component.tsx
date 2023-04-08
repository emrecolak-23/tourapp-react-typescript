import React from "react"
import { FC } from "react"

interface MainProp {
    children: React.ReactNode
}

const Main:FC<MainProp> = ({children}) => {
    return <main>
        {children}
    </main>
}

export default Main