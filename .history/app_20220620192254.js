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

app.use(express.static('public'));
app.set('puerto', proces.env.PORT || 3000);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));
app.get('/registro', (req, res) => res.sendFile(path.join(__dirname, './views/registro.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')));

app.listen(app,get('puerto'), ()=> console.log(`Servidor corriendo de manera sastisfactoria ${app.get('puerto')}` ));