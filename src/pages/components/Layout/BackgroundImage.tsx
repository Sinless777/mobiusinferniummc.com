import React, { PropsWithChildren } from 'react'
import { styled } from '@mui/material/styles'
import Navbar from './NavBar'

interface BackgroundImageProps {
    imageUrl: string
}

const Root = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
})

export const BackgroundImage: React.FC<
    PropsWithChildren<BackgroundImageProps>
> = ({ imageUrl, children }) => {
    return (
        <Root sx={{ backgroundImage: `url(${imageUrl})` }}>
            <Navbar />
            {children}
        </Root>
    )
}

export default BackgroundImage
