import React, { useState } from 'react';

function FormPessoa() {
  return (
    <form>
      <h2>Cadastro de Pessoa</h2>
      <input type="text" placeholder="Nome da Pessoa" />
      <input type="date" />
      <input type="tel" placeholder="Telefone" />
      <input type="text" placeholder="Endereço" />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormPessoa;
