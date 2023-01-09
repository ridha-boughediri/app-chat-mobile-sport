const checkTokenexist= require('../JWT/verif')

const express = require('express')

const nflTeams = require('../models/nfl_teams')
let router = express.Router()

 

const db= require('../db.config')

 // mon middleware pour NFL selon la route


router.use((req,res,next)=>{
    const event = new Date()
    
    console.log('NFL Time:', event.toString())
    next()
    

})






router.get('/', (req, res) => {
    db.nflTeams.findAll()
        .then(NflTeams => res.json({ data: NflTeams }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})


router.get('/:id', async (req, res) => {
    let nflTeamsId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!nflTeamsId) {
        return res.json(400).json({ message: 'Missing Parameter' })
    }

    try{
        // Récupération de l'nfl et vérification
        let nflTeams = await db.nflTeams.findOne({ where: { id: nflTeamsId }})
        if (nflTeams === null) {
            return res.status(404).json({ message: 'This nflTeams does not exist !' })
        }

        return res.json({ data: nflTeams })
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }    
})

router.post('',checkTokenexist, async (req, res) => {
    const { name, acronyme, uri_logo, arena, conference } = req.body

    // Validation des données reçues
    if (!name || !acronyme || !uri_logo || !arena || !conference) {
        return res.status(400).json({ message: 'Missing Data' })
    }

    try{
        // Vérification si l'nfl existe déjà
        const nflTeams = await db.nflTeams.findOne({ where: { name: name }, raw: true })
        if (nflTeams !== null) {
            return res.status(409).json({ message: `The nflTeams ${name} already exists !` })
        }

       
        // Céation de l'nfl
        let nflTeamsc = await db.nflTeams.create(req.body)
        return res.json({ message: 'nflTeams Created', data: nflTeamsc })

    }catch(err){
        if(err.name == 'SequelizeDatabaseError'){
            res.status(500).json({ message: 'Database Error', error: err })
        }
        res.status(500).json({ message: 'Hash Process Error', error: err})        
    }
})



router.patch('/:id',checkTokenexist, async (req, res) => {
    let nflTeamsId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!nflTeamsId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try{
        // Recherche de l'nfl et vérification
        let nflTeams = await db.nflTeams.findOne({ where: {id: nflTeamsId}, raw: true})
        if(nflTeams === null){
            return res.status(404).json({ message: 'This nflTeams does not exist !'})
        }

        // Mise à jour de l'nfl
        await db.nflTeams.update(req.body, { where: {id: nflTeamsId}})
        return res.json({ message: 'nflTeams Updated'})
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }
})




router.delete('/:id',checkTokenexist, (req, res) => {
    let nflTeamsId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!nflTeamsId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    // Suppression de l'nfl
    db.nflTeams.destroy({ where: {id: nflTeamsId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})




module.exports = router