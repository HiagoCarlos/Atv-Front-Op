import React, { useState } from 'react';

function FormNota() {
  return (
    <form>
      <h2>Cadastro de Notas</h2>
      <input type="text" placeholder="Nome do Aluno" />
      <input type="number" placeholder="Nota 1" />
      <input type="number" placeholder="Nota 2" />
      <input type="number" placeholder="Nota 3" />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormNota;
