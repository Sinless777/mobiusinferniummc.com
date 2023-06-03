import { Button } from '@mui/material'
import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    sx?: any
    onClick?: () => void
    href?: string
}

export const MIButton: React.FC<ButtonProps> = ({
    children,
    sx
}) => {
    const baseStyle = {
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: 'rgba(30, 28, 26, 0.7)',
        color: 'rgb(219, 215, 214)',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        border: '3px solid rgba(189, 155, 217, 0.5)',
        borderRadius: '50px'
    }

    const style = {
        ...baseStyle,
        ...sx
    }

    return <Button sx={style}>{children}</Button>
}

export default MIButton