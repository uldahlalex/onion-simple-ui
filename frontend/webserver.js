const express = require('express');
const port = 8100;
const app = express();
const nocache = require("nocache");


app.use(express.static('dist'))
app.use(nocache())

app.get('*', (req, res) => {
  res.sendFile('index.html',{root:__dirname+'/dist/'})
});
app.listen(process.env.PORT || port, () => {
  console.log("Server is listening on port "+port);
});
