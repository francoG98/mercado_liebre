 const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 2020;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));
app.get('/views/register.html', (req, res) => res.sendFile(path.join(__dirname, 'views/register.html')));
app.get('/views/login.html', (req, res) => res.sendFile(path.join(__dirname, 'views/login.html')));

app.listen(port, ()=> console.log(`Servidor corriendo de manera sastisfactoria ${port}` )); 

