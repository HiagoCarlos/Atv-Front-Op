import React, { useState } from 'react';

function FormAlunos() {
  return (
    <form>
      <h2>Cadastro de Alunos</h2>
      <input type="text" placeholder="Nome do Aluno" />
      <input type="text" placeholder="Matrícula" />
      <input type="tel" placeholder="Telefone de Contato" />
      <input type="text" placeholder="Curso" />
      <input type="text" placeholder="Notas" />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormAlunos;
