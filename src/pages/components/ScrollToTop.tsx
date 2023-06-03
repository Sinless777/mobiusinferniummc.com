import React from 'react'
import { Fab, Zoom } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const ScrollToTop = ({ show }: any) => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Zoom in={show}>
            <div onClick={handleClick} role="presentation">
                <Fab
                    color="primary"
                    size="small"
                    aria-label="scroll-to-top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>
        </Zoom>
    )
}

export default ScrollToTop
