const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
require('dotenv').config();

app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/contacts', router);

const PORT = process.env.PORT || 5000;
mongoose.
    connect(`${process.env.MongoDB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is listening at http://localhost:${PORT}`);
        })
        console.log('DB connected');
    })
    .catch(err => {
        console.log(err);
    })



