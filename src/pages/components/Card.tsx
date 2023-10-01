import React, { ReactNode } from 'react'
import {
    Box,
    Card,
    CardContent,
    CardHeader
} from '@mui/material'

interface CardProps {
    title: any
    children: ReactNode
    sx?: any
}
export const MICard: React.FC<CardProps> = ({
    title,
    children,
    sx
}) => {
    const baseStyle = {
        padding: 2,
        backgroundColor: 'rgba(30, 28, 26, 0.7)',
        color: 'rgb(219, 215, 214)',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        border: '3px solid rgba(189, 155, 217, 0.7)',
        borderRadius: '50px',
        minWidth: 150,
        maxWidth: 500,
        maxHeight: 800,
    }

    const style = {
        ...baseStyle,
        ...sx
    }

    return (
        <Card sx={style}>
            <CardHeader title={title} />
            <CardContent>
                <Box sx={{
                    maxHeight:600,
                    overflowY: 'auto',
                }}>
                    {children}
                </Box>
            </CardContent>
        </Card>
    )
}

export default MICard
