import React from 'react'
import { Box, Card, CardMedia } from '@mui/material'

interface LogoProps {
    width?: number
    height?: number
}

export const Logo: React.FC<LogoProps> = ({
    width = 400,
    height = 400
}) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <Card
                sx={{
                    background: 'transparent',
                    boxShadow: 'none',
                    borderRadius: '0px',
                    border: 'none'
                }}
            >
                <CardMedia
                    component="img"
                    src={
                        '/images/server-icon.png'
                    }
                    alt={
                        '/public/content/images/server-icon.png'
                    }
                    width={width || 350}
                    height={height || 350}
                />
            </Card>
        </Box>
    )
}

export default Logo
