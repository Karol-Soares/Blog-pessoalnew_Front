import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login'
import './App.css';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';

import {Provider} from 'react-redux';
import store from './store/store';
import DeletarTemas from './components/temas/deletarTema/DeletarTemas';
import DeletarPostagens from './components/postagens/deletarPostagem/DeletarPostagens';
import CadastroTemas from './components/temas/cadastroTema/CadastroTemas';
import ListaPostagens from './components/postagens/listapostagem/ListaPostagens';
import ListaTemas from './components/temas/listatema/ListaTemas';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (

    <Provider store={store}>
      <ToastContainer />
    <Router>
      <Navbar/>
        <Switch>
          <div>
            <Route exact path='/'>
              <Login/>
            </Route>

            <Route path='/login'>
              <Login/>
            </Route>

            <Route path='/home'>
              <Home/>
            </Route>

            <Route path='/cadastrousuario'>
              <CadastroUsuario/>
            </Route>

            <Route path='/temas'>
              <ListaTemas/>
            </Route>

            <Route path='/posts'>
              <ListaPostagens/>
            </Route>

            <Route exact path='/formularioPostagens'>
              <CadastroPost/>
            </Route>

            <Route exact path='/formularioPostagens/:id'>
              <CadastroPost/>
            </Route>

            <Route exact path='/formularioTemas'>
              <CadastroTemas/>
            </Route>

            <Route exact path='/formularioTemas/:id'>
              <CadastroTemas/>
            </Route>

            <Route path='/deletarPostagens/:id'>
              <DeletarPostagens/>
            </Route>

            <Route path='/deletarTemas/:id'>
              <DeletarTemas/>
            </Route>

          </div>
        </Switch>
      <Footer/>
    </Router>

    </Provider>
  );
}

export default App;
