const express = require('express');
const app = express();
var name
app.get('/', (req, res) => {
  const name = req.query.nombre || 'desconocido';;

  res.send(`<h1> Hola  ${name} ! </h1>`);
});




app.listen(3000, () => console.log('Listening on port 3000!'));

/* var test = name || '';
if((name ? name )){
  name = "desconocido"
}
*/
