import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Postagens from '../../../models/Postagens';
import './ListaPostagem.css';
import { useSelector } from 'react-redux';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';


function ListaPostagens() {

  const [posts, setPosts] = useState<Postagens[]>([])
  let history = useHistory();
  const token = useSelector<TokenState, TokenState['tokens']> (
    (state) => state.tokens
);

  useEffect(() => {
    if (token ==='') {
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
      history.push('/login')
    }
  }, [token])

  async function getPost() {
    await busca ('/postagens', setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
    {
      posts.map(post => (
      <Box m={2}>
        <Card variant="outlined" className='posts'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              {post.titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {post.texto}
            </Typography>
            <Typography variant="body2" component="p">
              {post.tema?.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to={`/formularioPostagens/${post.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained"  size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPostagens/${post.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
    )
}

export default ListaPostagens;