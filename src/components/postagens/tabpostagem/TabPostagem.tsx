import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagens from '../listapostagem/ListaPostagens';
import './TabPostagem.css';



function TabPostagens() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagens />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='sobre'>
          Aggressive Retsuko tem um tom bastante diferente da adorável menina gatinha, sendo mais próxima da nossa realidade. Em vários momentos do anime, é possível se identificar com a personagem.
          <br/>
          <br/>
          Ela é uma panda vermelho de 26 anos, que trabalha em um escritório de contabilidade, como contadora. Ela particularmente não gosta do que faz, principalmente porque tem com chefe com comportamentos abusivos e misóginos.
          <br/>
          <br/>
          Além disso, ela passa por diversos desafios com os quais nos identificamos.
          <br/>
          <br/>
          A solução para aliviar-se do estresse é cantar heavy-metal no karaokê.
          <br/>
          <br/>
          Ficou curiose? Então embarque nessa jornada com a gente e descubra que não estamos sozinhos!! 
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagens;