import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, Box } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';

import "./Navbar.css"

function NavBar() {
    return (
        <>
            <AppBar position="static" className='back'>
                <Toolbar className='bar'>
                    <Box className = 'cursor'>
                    <Typography className='title' variant="h6">
                        Blog Pessoal
                    </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className = 'cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className = 'cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className = 'cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className = 'cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator'>
                            <Box mx={1} className = 'cursor'>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                            </Box>
                        </Link>
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar