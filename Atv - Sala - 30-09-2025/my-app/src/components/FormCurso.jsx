import React, { useState } from 'react';

function FormCurso() {
  return (
    <form>
      <h2>Cadastro de Cursos</h2>
      <input type="text" placeholder="Nome da Escola" />
      <input type="text" placeholder="Endereço" />
      <input type="tel" placeholder="Telefone de Contato" />
      <input type="text" placeholder="Nome do Curso" />
      <textarea placeholder="Descrição do Curso"></textarea>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormCurso;
