const express = require('express');
const path = require('path');

// express app
const app = express();

app.set('view engine', 'ejs');

// static files middleware
// replace 'public' with the directory where your CSS files are located
app.use(express.static(path.join(__dirname, 'views')));

// listen for requests
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Home'} );
});



// redirects
/*
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});
*/

// 404 page
/*
app.use((req, res) => {
  res.status(404).render('404');
});
*/