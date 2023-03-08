
const express = require('express')

const bcrypt = require('bcrypt')

let router = express.Router()

const db = require('../db.config')


const checkTokenexist = require('../JWT/verif')
const checkId = require('../JWT/checkAdmin')

router.use((req, res, next) => {
    const event = new Date()
    console.log('Mesage Time:', event.toString())
    next()
})
router.get('/', checkTokenexist, checkId,(req, res) => {
    db.user.findAll()
        .then(users => res.json({ data: users }), res.status(200))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
});
module.exports = router