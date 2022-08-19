const express = require('express');
var cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());

app.get('/', function (req, res) {
  res.send(
    `<button type="button" onclick="location.href='/lolChampName'">롤 챔피언 이름</button>`
  );
});

app.get('/lolChampName', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port);
