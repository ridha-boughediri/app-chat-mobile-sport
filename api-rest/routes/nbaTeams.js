const express = require('express')
const checkTokenexist= require('../JWT/verif')

let router = express.Router()

const db= require('../db.config')

const nbaTeams = require('../models/nba_teams')
const user = require('../models/user')
const checkId = require('../JWT/checkAdmin')
 
 // mon middleware pour NBA selon la route


 router.use((req,res,next)=>{
    const event = new Date()
    
    console.log('NBA Time:', event.toString())
    next()
    

})



router.get('/', (req, res) => {
    db.nbaTeams.findAll()
        .then(NbaTeams => res.json({ data: NbaTeams }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})


router.get('/:id', async (req, res) => {
    let nbaTeamsId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!nbaTeamsId) {
        return res.json(400).json({ message: 'Missing Parameter' })
    }

    try{
        // Récupération de l'NBA et vérification
        let nbaTeams = await db.nbaTeams.findOne({ where: { id: nbaTeamsId },include:user})
        if (nbaTeams === null) {
            return res.status(404).json({ message: 'This nbaTeams does not exist !' })
        }

        return res.json({ data: nbaTeams })
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }    
})

router.post('',checkTokenexist,checkId, async (req, res) => {
    const { name, acronyme, uri_logo, arena, conference } = req.body

    // Validation des données reçues
    if (!name || !acronyme || !uri_logo || !arena || !conference) {
        return res.status(400).json({ message: 'Missing Data' })
    }

    try{
        // Vérification si l'NBA existe déjà
        const nbaTeams = await db.nbaTeams.findOne({ where: { name: name }, raw: true })
        if (nbaTeams !== null) {
            return res.status(409).json({ message: `The nbaTeams ${name} already exists !` })
        }

       
        // Céation de l'NBA
        let nbaTeamsc = await db.nbaTeams.create(req.body)
        return res.json({ message: 'nbaTeams Created', data: nbaTeamsc })

    }catch(err){
        if(err.name == 'SequelizeDatabaseError'){
            res.status(500).json({ message: 'Database Error', error: err })
        }
        res.status(500).json({ message: 'Hash Process Error', error: err})        
    }
})



router.patch('/:id',checkTokenexist,checkId, async (req, res) => {
    let nbaTeamsId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!nbaTeamsId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try{
        // Recherche de l'NBA et vérification
        let nbaTeams = await db.nbaTeams.findOne({ where: {id: nbaTeamsId}, raw: true})
        if(nbaTeams === null){
            return res.status(404).json({ message: 'This nbaTeams does not exist !'})
        }

        // Mise à jour de l'NBA
        await db.nbaTeams.update(req.body, { where: {id: nbaTeamsId}})
        return res.json({ message: 'nbaTeams Updated'})
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }
})




router.delete('/:id',checkTokenexist,checkId, (req, res) => {
    let nbaTeamsId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!nbaTeamsId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    // Suppression de l'NBA
    db.nbaTeams.destroy({ where: {id: nbaTeamsId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})



module.exports = router