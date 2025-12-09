const express = require('express');
const app = express();
const port = 4000;


app.set('view engine', 'ejs');
app.use(express.static('public'));




app.get('/', (req, res) => {
  res.render('index');
});

app.get('/important', (req, res) => {
  res.render('important');
});

app.get('/choose', (req, res) => {
  res.render('choose');
});

app.get('/young-age', (req, res) => {
  res.render('young-age');
});





app.listen(port, () => {
  console.log('App listining on port' +port);
});