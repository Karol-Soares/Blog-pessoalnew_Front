import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='background'>
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={20} className='box'>
                        <Typography className='titulohome' variant="h3" gutterBottom color="textSecondary" component="h3" align="center" >Seja bem vindx!</Typography>
                        <Typography className='titulohome' variant="h5" gutterBottom color="textSecondary" component="h5" align="center" >expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#2A82C0" , color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                
                <Grid xs={12} className='postagens' style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;