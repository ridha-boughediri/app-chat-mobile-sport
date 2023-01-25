const express = require('express')
let router = express.Router()
const checkTokenexist= require('../JWT/verif')


const nhlTeams = require('../models/nhl_teams')



const db= require('../db.config')
const checkId = require('../JWT/checkAdmin')


// mon middleware pour NHL selon la route


router.use((req,res,next)=>{
    const event = new Date()
    
    console.log('NHl Time:', event.toString())
    next()
    

})



router.get('/', (req, res) => {
    db.nhlTeams.findAll()
        .then(NhlTeams => res.json({ data: NhlTeams }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})


router.get('/:id', async (req, res) => {
    let nhlTeamsId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!nhlTeamsId) {
        return res.json(400).json({ message: 'Missing Parameter' })
    }

    try{
        // Récupération de l'nhl et vérification
        let nhlTeams = await db.nhlTeams.findOne({ where: { id: nhlTeamsId }})
        if (nhlTeams === null) {
            return res.status(404).json({ message: 'This nhlTeams does not exist !' })
        }

        return res.json({ data: nhlTeams })
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
        // Vérification si l'nhl existe déjà
        const nhlTeams = await db.nhlTeams.findOne({ where: { name: name }, raw: true })
        if (nhlTeams !== null) {
            return res.status(409).json({ message: `The nhlTeams ${name} already exists !` })
        }

       
        // Céation de l'nhl
        let nhlTeamsc = await db.nhlTeams.create(req.body)
        return res.json({ message: 'nhlTeams Created', data: nhlTeamsc })

    }catch(err){
        if(err.name == 'SequelizeDatabaseError'){
            res.status(500).json({ message: 'Database Error', error: err })
        }
        res.status(500).json({ message: 'Hash Process Error', error: err})        
    }
})



router.patch('/:id',checkTokenexist,checkId, async (req, res) => {
    let nhlTeamsId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!nhlTeamsId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try{
        // Recherche de l'nhl et vérification
        let nhlTeams = await db.nhlTeams.findOne({ where: {id: nhlTeamsId}, raw: true})
        if(nhlTeams === null){
            return res.status(404).json({ message: 'This nhlTeams does not exist !'})
        }

        // Mise à jour de l'nhl
        await db.nhlTeams.update(req.body, { where: {id: nhlTeamsId}})
        return res.json({ message: 'nhlTeams Updated'})
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }
})




router.delete('/:id',checkTokenexist, (req, res) => {
    let nhlTeamsId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!nhlTeamsId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    // Suppression de l'nhl
    db.nhlTeams.destroy({ where: {id: nhlTeamsId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})

module.exports = router