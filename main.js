'use strict' // for use another kind of js
 
// Librerias (solo se importan librerias que esten en contacto con el usurario)
const express = require('express'); // porque va a estar usando esta libreria (express)
const colors = require('colors');
const bodyParser = require('body-parser');

//Aplicación
const app = express(); //la función express

// configuración de la App
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // permitir acceso sin importar la ubicación del usuario

  res.header('Access-Control-Allow-Headers', 'Origin, X-request-With, Content-Type, Accept, x-auth-token'); 
  // Permitir que cualquier usurario acceda a la información sin que este autentificado

  res.header('Access-Control-Expose-Headers', 'x-auth-token'); // permitir ver esa información

  next() // Para que salga del bucle
});

app.use(bodyParser.urlencoded({
  extended: true
}));

var port = 1234; //para correr el servidor

app.get('/', (req, res) => { // req es para recibir datos, res para enviar datos
  res.send('Entraste a la ruta raiz');
});

app.get('/hi', (req, res) => {
  res.send('Hola');
});

app.get('/info', (req, res) => {
  res.send('This actually works!');
});

app.post('/saludo', (req, res) => {
  var name = req.body.name;

  res.send(`Hola ${name} un gusto conocerte`);
});

// Correr app
app.listen(port, () => { //fancy way of writing a function
  console.log(colors.rainbow('Running succesfully! At http://localhost:1234'));
});
