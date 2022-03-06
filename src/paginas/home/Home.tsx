import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagens/ModalPostagens';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokenReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState['tokens']> (
        (state) => state.tokens
    );
    
    useEffect(() => {
      if (token === "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,

        });
          history.push("/login")
  
      }
  }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='background'>
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={20} className='box'>
                        <Typography className='titulohome' variant="h3" gutterBottom color="textPrimary" component="h3" align="center">Seja bem vinde!</Typography>
                        <Typography className='titulohome2' variant="h5" gutterBottom color="textSecondary" component="h5" align="center" >No que você está pensando agora?</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/posts'>
                            <Button variant="outlined" className='buttonverp'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;