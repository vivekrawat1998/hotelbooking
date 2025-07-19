import React from 'react'
import { Link } from 'react-router-dom'

export const Paragraph = ({ children, className }) => {
    return (
        <p className={`text-sec   ${className}`} style={{ fontSize: "clamp(.7rem, 4vw, 1.3rem)" }}>
            {children}
        </p>
    )
}
export const Title = ({ children, className }) => {
    return (
        <p className={`text-sec leading-20 font-MyCustomFont font-medium ${className}`} style={{ fontSize: "clamp(.7rem, 4vw, 4rem)" }}>
            {children}
        </p>
    )
}