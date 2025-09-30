import React, { useState } from 'react';

function FormProduto() {
  return (
    <form>
      <h2>Cadastro de Produto</h2>
      <input type="text" placeholder="Nome do Produto" />
      <input type="number" placeholder="Preço do Produto" />
      <input type="date" />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormProduto;
