
const express = require('express')

let router = express.Router()

const checkTokenexist= require('../JWT/verif')

const Sport = require('../models/sport')

const user=require('../models/user')


const db = require('../db.config')
const checkId = require('../JWT/checkAdmin')


// mon middleware pour sport selon la route


router.use((req,res,next)=>{
    const event = new Date()
    
    console.log('Sport Time:', event.toString())
    next()
    

})







router.get('/', (req, res) => {
    db.Sport.findAll()
        .then(sports => res.json({ data: sports }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})




router.get('/:id', async (req, res) => {
    let sportId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!sportId) {
        return res.json(400).json({ message: 'Missing Parameter' })
    }

    try{
        // Récupération de l'descipline et vérification
        let sport = await db.Sport.findOne({ where: { id: sportId }, attributes: ['id','name','league_name']})
        if (sport === null) {
            return res.status(404).json({ message: 'This sport does not exist !' })
        }

        return res.json({ data: sport })
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }    
})

router.post('/',checkTokenexist,checkId, async (req, res) => {
    const { name, league_name } = req.body

    // Validation des données reçues
    if (!name || !league_name) {
        return res.status(400).json({ message: 'Missing Data' })
    }

    try{
        // Vérification si l'descipline existe déjà
        const sport = await db.Sport.findOne({ where: { name: name }, raw: true })
        if (sport !== null) {
            return res.status(409).json({ message: `The sport ${nom} already exists !` })
        }

        

        // Céation de l'descipline
        let sportc = await db.Sport.create(req.body)
        return res.json({ message: 'sport Created', data: sportc }), res.status(200)

    }catch(err){
        if(err.name == 'SequelizeDatabaseError'){
            res.status(500).json({ message: 'Database Error', error: err })
        }
        res.status(500).json({ message: 'Hash Process Error', error: err})        
    }
})



router.patch('/:id',checkTokenexist,checkId, async (req, res) => {
    let sportId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!sportId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try{
        // Recherche de l'descipline et vérification
        let sport = await db.Sport.findOne({ where: {id: sportId}, raw: true})
        if(sport === null){
            return res.status(404).json({ message: 'This sport does not exist !'})
        }

        // Mise à jour de l'descipline
        await db.Sport.update(req.body, { where: {id: sportId}})
        return res.json({ message: 'sport Updated'})
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }
})

router.delete('/:id',checkTokenexist,checkId, (req, res) => {
    let sportId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!sportId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    // Suppression de l'descipline
    db.Sport.destroy({ where: {id: sportId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})



module.exports = router