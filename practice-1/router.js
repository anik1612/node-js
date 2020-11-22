const router = require('express').Router()

router.get('/login', (req, res) => {
    res.send('<h1>Login route</h1>')
})

router.get('/logout', (req, res) => {
    res.send('<h1>Login route</h1>')
})

router.get('/signup', (req, res) => {
    res.send('<h1>Login route</h1>')
})

module.exports = router;