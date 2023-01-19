
const express = require('express')

const bcrypt = require('bcrypt')

let router = express.Router()

const db = require('../db.config')


const checkTokenexist= require('../JWT/verif')


// mon middleware pour user selon la route


router.use((req,res,next)=>{
    const event = new Date()
    
    console.log('User Time:', event.toString())
    next()
    

})

router.get('/', (req, res) => {
    db.user.findAll()
        .then(users => res.json({ data: users }), res.status(200))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
});

router.get('/',checkTokenexist, (req, res) => {
    db.user.findAll()
        .then(users => res.json({ data: users }), res.status(200))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
});

router.get('/firstlast', (req, res) => {
    db.user.findAll({attributes: ['firstname', 'lastname','uri_avatar']})
    .then(users => res.json({data: users}), res.status(200))
    .catch(err => res.status(500).json({message: 'Database Error', error: err}))
});


router.get('/:id',checkTokenexist, async (req, res) => {
    let userId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!userId) {
        return res.json(400).json({ message: 'Missing Parameter' })
    }

    try {
        // Récupération de l'utilisateur et vérification
        let user = await db.user.findOne({ where: { id: userId }, attributes: ['login','email','password','firstname','lastname','uri_avatar','sport_id','nbateam_id','nflteam_id','nhlteam_id'] })
        if (user === null) {
            return res.status(404).json({ message: 'This user does not exist !' })
        }

        return res.json({ data: user }), res.status(200);
    } catch (err) {
        return res.status(500).json({ message: 'Database Error', error: err })
    }
})

router.post('/register', async (req, res) => {

    const { lastname, firstname, login, email, password } = req.body

    // Validation des données reçues
    if (!lastname || !firstname || !login || !email || !password) {
        return res.status(400).json({ message: 'Missing Data' })
    }

    try {
        // Vérification si l'utilisateur existe déjà
        const user = await db.user.findOne({ where: { email: email }, raw: true })
        if (user !== null) {
            return res.status(409).json({ message: `The user ${lastname} already exists !` })
        }

        // Hashage du mot de passe utilisateur
        let hash = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUND))
        req.body.password = hash

        // Céation de l'utilisateur
        let userc = await db.user.create(req.body)
        return res.json({ message: 'User Created', data: userc }), res.status(200);

    } catch (err) {
        if (err.name == 'SequelizeDatabaseError') {
            res.status(500).json({ message: 'Database Error', error: err })
        }
        res.status(500).json({ message: 'Hash Process Error', error: err })
    }

})



router.patch('/:id',checkTokenexist, async (req, res) => {
    let userId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!userId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try {
        // Recherche de l'utilisateur et vérification
        let user = await db.user.findOne({ where: { id: userId }, raw: true })
        if (user === null) {
            return res.status(404).json({ message: 'This user does not exist !' })
        }

        // Mise à jour de l'utilisateur
        await db.user.update(req.body, { where: { id: userId } })
        return res.json({ message: 'User Updated' }), res.status(200);
    } catch (err) {
        return res.status(500).json({ message: 'Database Error', error: err })
    }
})


router.delete('/:id',checkTokenexist, (req, res) => {
    let userId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!userId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    // Suppression de l'utilisateur
    db.user.destroy({ where: {id: userId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})

module.exports = router





