import "tailwindcss/dist/base.min.css"
import React from "react"
import { BoardContextProvider } from './src/contexts/BoardContext/BoardContext'

export const wrapRootElement = ({ element }) => {
    return (
        <BoardContextProvider>{ element }</BoardContextProvider>
    )
}