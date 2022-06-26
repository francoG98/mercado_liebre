 const express = require('express');
const path = require('path');
const app = express();

/*
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));
app.get('/views/register.html', (req, res) => res.sendFile(path.join(__dirname, './views/register.html')));
app.get('/views/login.html', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')));
*/

const port = process.env.PORT || 2020;
const publicPath = path.join(__dirname, '../public');
const viewspath = path.join(__dirname, '../views');
app.use(express.static(publicPath));

app.get('/', (req, res) => res.sendFile(path.join(viewspath, '/index.html')));
app.get('/registro', (req, res) => res.sendFile(path.join(viewspath, '/registro.html')));
app.get('/login', (req, res) => res.sendFile(path.join(viewspath, '/login.html')));

app.listen(port, ()=> console.log(`Servidor corriendo de manera sastisfactoria ${port}` )); 