import React from 'react'
import { AppBar, Toolbar, Typography, Box, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function NavBar() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState['tokens']> (
        (state) => state.tokens
    );
    const dispatch = useDispatch();
    

    function goLogout(){
        dispatch(addToken(''));
        toast.info('Perfil deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,

        });
        history.push('/login')
    }

    var navbarComponent;

    if(token !== ''){
        navbarComponent = <AppBar position="static" className='back'>
        <Toolbar className='bar'>

            <Box>
                <Avatar alt="LOGO" src='https://i.imgur.com/63pt6Hi.jpeg' />
            </Box>

            <Box className = 'cursor'>
            <Typography className='title' variant="h6">
                AggRetsuko
            </Typography>
            </Box>

            <Box className= 'navright' display="flex" justifyContent={'right'}>
                <Link to='/home' className="text-decorator-none">
                    <Box mx={1} className = 'cursor'>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Link>
                <Link to= '/posts' className="text-decorator-none">
                <Box mx={1} className = 'cursor'>
                    <Typography variant="h6" color="inherit">
                        Postagens
                    </Typography>
                </Box>
                </Link>
                <Link to= '/temas' className="text-decorator-none">
                <Box mx={1} className = 'cursor'>
                    <Typography variant="h6" color="inherit">
                        Temas
                    </Typography>
                </Box>
                </Link>
                <Link to= '/formularioTemas' className="text-decorator-none">
                <Box mx={1} className = 'cursor'>
                    <Typography variant="h6" color="inherit">
                        Cadastrar tema
                    </Typography>
                </Box>
                </Link>
                
                    <Box mx={1} className = 'cursor' onClick={goLogout}>
                    <Typography variant="h6" color="inherit">
                        Logout
                    </Typography>
                    </Box>                        
                
            </Box>
        </Toolbar>
    </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default NavBar