const express = require('express');
const app = express();

const routes = require('./routes')

//Habilitar arquivos statics
app.use(express.static("public"));

//Rotas
app.use(routes); 

app.listen(3500, () => {
  console.log('Run server!')
});