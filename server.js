var express = require('express');
var app = express();
app.use(express.static('dist'));
app.use(express.static('examples'));

app.listen(3000, function () {
  console.log('Style guide app is listening on port 3000!');
});
