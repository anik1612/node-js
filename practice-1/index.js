const express = require('express');
const router = require('./router')

const app = express();

app.use('/user', router)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server is up and running on port',PORT);
})