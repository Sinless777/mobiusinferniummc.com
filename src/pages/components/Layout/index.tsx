import React from 'react'
import { BackgroundImage } from './BackgroundImage'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'

interface BaseLayoutProps {
    backgroundImageUrl: string
    children: React.ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
    backgroundImageUrl,
    children
}) => {
    return (
        <BackgroundImage imageUrl={backgroundImageUrl}>
            <Box height="100%" overflow="auto">
                <Grid
                    container
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        paddingTop: 5,
                        paddingBottom: 5
                    }}
                >
                    {children}
                </Grid>
            </Box>
        </BackgroundImage>
    )
}

export default BaseLayout
