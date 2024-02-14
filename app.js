const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/ira', (req, res) => {
  res.render('student', { studentName: 'Iryna',studentPhoto: "/images/photo_ira.jpg", studentSurname:'Mykytenko',link:'https://kpi.ua/ist-fiot', place:'ФІОТ', studentAge: 19 });
});
app.get('/vika', (req, res) => {
  res.render('student', { studentName: 'Victoria',studentPhoto: "/images/photo_vika.jpg", studentSurname:'Patryk',link:'https://kpi.ua/ist-fiot', place:'ФІОТ', studentAge: 18 });
});
app.get('/elvira', (req, res) => {
  res.render('student', { studentName: 'Elvira',studentPhoto: "/images/photo_elvira.jpg", studentSurname:'Tretiakova',link:'https://kpi.ua/ist-fiot', place:'ФІОТ', studentAge: 18 });
    });
app.get('/alona', (req, res) => {
  res.render('student', { studentName: 'Alona',studentPhoto: "/images/photo_alona.jpg", studentSurname:'Fomenko',link:'https://kpi.ua/ist-fiot', place:'ФІОТ', studentAge: 18 });
});
module.exports = app;
