const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/about', (req, res) => {
    const title = {
       title: 'About Page EJS - Anik Sarker'
    };
    res.render('pages/about', title)
})

app.get('/help', (req, res) => {
    const title = {
        title: 'Help Page EJS - Anik Sarker'
     };
    res.render('pages/help', title)
})

app.get('/', (req, res) => {

    const pageTitle = {
        title: 'Home Page EJS - Anik Sarker'
     };

    let post = {
        title: 'Test Title',
        body: 'Test Body',
        published: true
    }

    let posts = [
        {
            title: 'Title one',
            author: 'anik sarker'
        },
        {
            title: 'Title two',
            author: 'anik sarker'
        },
        {
            title: 'Title three',
            author: 'anik sarker'
        }
    ]
    res.render('pages/index', { title: 'EJS is an awesome template engine', post, posts, title: pageTitle.title }  )
    // res.send('<h1>working with template engine</h1>')
})

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
})