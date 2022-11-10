const express = require('express');
const port = 8100;
const app = express();
const nocache = require("nocache");
const path = require("path");

app.use(nocache())
app.use(express.static(__dirname + '/dist/frontend'));

// PathLocationStrategy
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
})
app.listen(process.env.PORT || port, () => {
  console.log("Server is listening on port "+port);
});
