const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { addArticle } = require('./manage-articles');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join('__DIRNAME', '../public')));

app.post('/addArticle', function(req, res) {
  console.log('req received by server', req.body);
  addArticle({ text: req.body.text });
  res.send('OK');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Open http://localhost:${port} in your browser`);
});
