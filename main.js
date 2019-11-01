'use strict' // for use another kind of js
 
// Librerias (solo se importan librerias que esten en contacto con el usurario)
const express = require('express'); // porque va a estar usando esta libreria (express)
const colors = require('colors');

//Aplicación
const app = express(); //la función express

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

// Correr app
app.listen(port, () => { //fancy way of writing a function
  console.log(colors.rainbow('Running succesfully! At http://localhost:1234'));
});
