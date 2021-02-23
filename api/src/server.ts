import 'reflect-metadata';
import express from 'express';
import  './database';

const app = express();

/*
  *GET => Buscar
  *POST => Salvar
  *PUT => Alterar
  *DELETE => Deletar
  *PATCH => Alteração especifica
*/

// http://localhost/users
app.get("/", (request,response) => {
  return response.json({ message:'Hello world - NLW 04' });
});

// parametro => Rota(recurso API)
// parametro => request, response
app.post("/", (request, response) => {
  return response.json({ message: "Os dados foram salvos com sucesso!!!" });
});

app.listen(3333, () => console.log("Server is running!!!"));
