import React from 'react';
import Menu from './Menu/Menu';
import Rodape from './Rodape/Rodape';
import Galeria from './Galeria/Galeria';
import ListaProdutos from './Lista-produtos/lista-produtos';
import Noticias from './Noticias/Noticias';

function App() {
  return (
    <div className="App">
      <Menu />
      <Galeria />
      <ListaProdutos />
      <Noticias />
      <Rodape />
    </div>
  );
}

export default App;
