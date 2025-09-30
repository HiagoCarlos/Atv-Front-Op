import React from 'react';
import './App.css';

import FormProduto from './components/formProduto';
import FormCurso from './components/formCurso';
import FormPessoa from './components/formPessoa';
import FormAlunos from './components/formAlunos';
import FormNota from './components/formNota';

function App() {
  return (
    <div>
      <h1>Exercícios React</h1>

      <FormProduto />
      <FormCurso />
      <FormPessoa />
      <FormAlunos />
      <FormNota />
    </div>
  );
}

export default App;
