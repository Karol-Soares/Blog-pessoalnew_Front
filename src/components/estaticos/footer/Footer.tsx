import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#03247c", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom style={{ color: "white" }}>Conheça minha rede: </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/karol-soares/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#f78a4a", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 </Typography>
                        </Box>
                        <Box>
                        
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Karolina Soares</Typography>
                        
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;