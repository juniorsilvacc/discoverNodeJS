const express = require('express');
const app = express();
const routes = require('./routes');

app.set('view engine', 'ejs')

//Habilitar arquivos statics
app.use(express.static("public"));

//Liberando o req.body
app.use(express.urlencoded({extended: true}));

//Rotas
app.use(routes); 

app.listen(3500, () => {
  console.log('Run server!')
});