const express = require('express');
const app = express();

app.get('/', (req, res) => {
  var i=1;
  var text='';
  var paragraph ='';
  while (i<51){
    if (i % 2 === 0){
      text = i + ' Soy par!';
    }
    else{
      text = i+ ' Soy impar!';

    }
    i++;
    paragraph += '<p>' + text + '</p>';

  }
res.send(`${paragraph}`);

});

app.listen(3000, () => console.log('Listening on port 3000!'));
