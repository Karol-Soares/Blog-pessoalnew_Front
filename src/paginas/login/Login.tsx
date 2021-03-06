import React, {ChangeEvent, useState} from "react";
import {Grid, Box, Typography, TextField, Button} from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import './Login.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToken } from '../../store/tokens/actions';
import { toast } from "react-toastify";


function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>){

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

        useEffect(()=>{
            if (token !== ''){
                dispatch(addToken(token))
                history.push('/home')
            }
        }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login (`/usuarios/logar`, userLogin, setToken)
                toast.success('Login realizado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }catch (error){
            
                toast.error('Falha ao logar! Por favor, verifique os dados inseridos.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                
            }
        }

    return (
        <Grid container direction='row' justifyContent="center" alignItems="center">
            <Grid alignItems='center' xs={6} className='login2'>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color='textPrimary' component='h3' align="center" className="textolog">Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usu??rio' variant='filled' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='filled' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            
                                <Button type='submit' variant='contained' color='secondary' className="log">
                                    Logar
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent = 'center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography className='titulohome2' variant='subtitle1' gutterBottom align='center'> N??o tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                        <Typography variant='subtitle1' gutterBottom align='center' className="textolog">Cadastre-se</Typography>
                        </Link>
                        
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='img-lateral'>

            </Grid>
        </Grid>
    );

}
export default Login;