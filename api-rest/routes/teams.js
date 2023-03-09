const express = require('express')
const checkTokenexist= require('../JWT/verif')

let router = express.Router()

const db= require('../db.config')

const teams = require('../models/teams')
const user = require('../models/user')
const checkId = require('../JWT/checkAdmin')
const sport = require('../models/sport')


router.get('/', (req, res) => {
    db.teams.findAll()
        .then(teams => res.json({ data: teams }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})


router.get('/:id', async (req, res) => {
    let teamsId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!teamsId) {
        return res.json(400).json({ message: 'Missing Parameter' })
    }

    try{
        let allTeamsId = await db.teams.findOne({ where: { id: teamsId },include:user})
        if (allTeamsId === null) {
            return res.status(404).json({ message: 'This nbaTeams does not exist !' })
        }

        return res.json({ data: nbaTeams })
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }    
})

router.get('/teams/:sportId', async (req, res) => {
    const sportId = req.params.sportId;
    try {
      const team = await teams.findAll({
        where: { id_sport: sportId },
        include: { model: sport }
      });
      res.json(team);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des équipes" });
    }
  });

module.exports = router;