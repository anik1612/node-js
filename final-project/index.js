const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log('App is listening on port',PORT);
        })
    })
    .catch(error => {
        console.log(error);
    })
