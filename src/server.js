const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

//Template engine
app.set('view engine', 'ejs');

//Mudando a localização da pasta views
app.set('views', path.join(__dirname, 'views'));

//Habilitar arquivos statics
app.use(express.static("public"));

//Liberando o req.body
app.use(express.urlencoded({extended: true}));

//Rotas
app.use(routes); 

app.listen(3500, () => {
  console.log('Run server!')
});