const express = require('express');
const app = express();

app.get('/user/:nombre', (req, res) => {
  const nombre = req.params.nombre || 'desconocido';;
  const Capnombre = nombre.charAt(0).toUpperCase()+ nombre.slice(1);
  res.send(`<h1>Hola ${Capnombre}!</h1>`);
});




app.listen(3000, () => console.log('Listening on port 3000!'));
