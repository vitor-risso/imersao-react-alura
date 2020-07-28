import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Pages/Home';
import CadastroVideo from './components/Pages/Cadastro/Video'

import { BrowserRouter , Switch, Route } from 'react-router-dom'; 
import CadastroCategoria from './components/Pages/Cadastro/categoria'


const Pagina404 = () => (<div>
  Página 404
</div>)

ReactDOM.render(

  
  <BrowserRouter>
    <Switch>

      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component ={Pagina404}/>
    
    </Switch>
  </BrowserRouter> ,

  document.getElementById('root')
);


