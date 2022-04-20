const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('hbs');
const app = express();
const PORT = process.env.port || 5050;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

//set views file
app.set('views', path.join(__dirname, 'views'));

//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set folder public sebagai static folder untuk static file
app.use('/assets', express.static(__dirname + '/public'));

//route homepage
app.get ('/index', (req, res) => {
	res.render('index_view');
});

//route contact
app.get ('/contact', (req, res) => {
	res.render('contact_view');
});

//route untuk about
app.get ('/about', (req, res) => {
	res.render('about_view');
});

//Server listening
app.listen(8000,() =>{
	console.log('Server started on port 8000...');
});