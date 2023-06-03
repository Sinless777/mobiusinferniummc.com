import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'

const pages = ['Staff', 'About', 'Store']
const settings = [
    'Profile',
    'Account',
    'Dashboard',
    'Logout'
]
const Navbar: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (
        event: React.MouseEvent<HTMLElement>
    ) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (
        event: React.MouseEvent<HTMLElement>
    ) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}
                    >
                        <Image
                            src={
                                '/images/server-icon.png'
                            }
                            alt={'logo'}
                            width={50}
                            height={50}
                        />
                        <br />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            },
                            fontFamily: 'monospace',
                            fontSize: 26,
                            fontWeight: 900,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            textShadow:
                                '2px 2px 10px rgba(252, 171, 0)'
                        }}
                    >
                        Mobius Infernium
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            }
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {
                                    xs: 'block',
                                    md: 'none'
                                },
                                backdropColor:
                                    'rgba(30, 28, 26, 0.5)',
                                backgroundColor:
                                    'rgba(30, 28, 26, 0.5)',
                                backdropFilter:
                                    'blur(1.5px)'
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={
                                        handleCloseUserMenu
                                    }
                                    href={page}
                                >
                                    <Button
                                        href={page}
                                        sx={{
                                            color: 'rgb(219, 215, 214)'
                                        }}
                                    >
                                        {page}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            display: {
                                xs: 'flex',
                                md: 'none'
                            }
                        }}
                    >
                        <Image
                            src={
                                '/images/server-icon.png'
                            }
                            alt={'logo'}
                            width={50}
                            height={50}
                        />
                        <br />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        Mobius Infernium
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                href={page}
                                sx={{
                                    my: 2,
                                    color: 'rgb(30, 28, 26)',
                                    display: 'block',
                                    paddingLeft: 1,
                                    paddingRight: 1,
                                    fontFamily: 'monospace',
                                    textShadow:
                                        '2px 2px 5px rgba(252, 171, 0.1)',
                                    fontWeight: 800,
                                    fontSize: 15
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 0,
                            display: { xs: 'none' }
                        }}
                    >
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{
                                mt: '45px',
                                backdropFilter: 'blur(2px)'
                            }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={
                                        handleCloseUserMenu
                                    }
                                >
                                    <Button href={setting}>
                                        {setting}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
