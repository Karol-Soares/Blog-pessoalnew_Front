import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { GitHub } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState['tokens']> (
        (state) => state.tokens
    );

    var footerComponent

    if (token !== ''){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom className='texto'>Conheça minhas redes sociais: </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/karol-soares/" target="_blank">
                                <LinkedInIcon className='rede' />
                            </a>

                            <a href="https://github.com/Karol-Soares" target="_blank">
                                <GitHub className='rede' />
                            </a>

                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='texto' >© 2022 </Typography>
                        </Box>
                        <Box>
                        
                            <Typography variant="subtitle2" gutterBottom className='texto' align="center">br.generation.org</Typography>
                        
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    }
    
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;