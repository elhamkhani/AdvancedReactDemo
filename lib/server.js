import express from 'express';
import config from './config';
import serverContent from 'renderers/server';

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res) => {
  const initialContent = serverContent();
  res.render('index',{initialContent});
});

app.listen(config.port, function(){
  console.info(`running on ${config.port}.`);
});
