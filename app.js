let express = require('express');

const app = express();

app.use(
  express.static(
    __dirname + '/public' //, {extensions: "html"} <--- another way of routing instead of res.sendFile or say .html in the url
  )
);

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/chickens', (req, res, next) => {
  res.send('Chicken here');
});

// app.get('/', (req, res, next) => {
//   res.render('');
// });

app.listen(3000, () => {
  console.log('listening on port 3000');
});
