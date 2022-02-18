import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom className='texto'>Conheça minha rede: </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/karol-soares/" target="_blank">
                                <LinkedInIcon className='rede' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='texto' >© 2022 </Typography>
                        </Box>
                        <Box>
                        
                            <Typography variant="subtitle2" gutterBottom className='texto' align="center">Karolina Soares</Typography>
                        
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;