
const express = require('express')
let router = express.Router()
const checkTokenexist= require('../JWT/verif')

const rooms = require('../models/room')


const db = require('../db.config')

// mon middleware pour Room selon la route


router.use((req,res,next)=>{
    const event = new Date()
    
    console.log('Room Time:', event.toString())
    next()
    

})



router.get('/', checkTokenexist, (req, res) => {
    db.room.findAll()
        .then(rooms => res.json({ data: rooms }), res.status(200))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})



router.get('/', (req, res) => {
    db.room.findAll()
        .then(rooms => res.json({ data: rooms }), res.status(200))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})



router.get('/:id', checkTokenexist, async (req, res) => {
    let roomId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!roomId) {
        return res.json(400).json({ message: 'Missing Parameter' })
    }

    try {
        // Récupération de l'utilisateur et vérification
        let room = await db.room.findOne({ where: { id: roomId } })
        if (room === null) {
            return res.status(404).json({ message: 'This room does not exist !' })
        }

        return res.json({ data: room }), res.status(200)
    } catch (err) {
        return res.status(500).json({ message: 'Database Error', error: err })
    }
})

router.post('/',checkTokenexist, async (req, res) => {
    const { name} = req.body



    try{
        // Vérification si l'Salon existe déjà
        const room = await db.room.findOne({ where: { name: name }, raw: true })
        if (room !== null) {
            return res.status(409).json({ message: `The room ${nom} already exists !` })
        }

       
        // Céation de l'Salon
        let rooms = await db.room.create(req.body)
        return res.json({ message: 'room Created', data: rooms }), res.status(200)

    }catch(err){
        if(err.name == 'SequelizeDatabaseError'){
            res.status(500).json({ message: 'Database Error', error: err })
        }
        res.status(500).json({ message: 'Hash Process Error', error: err})        
    }
})



router.patch('/:id',checkTokenexist, async (req, res) => {
    let roomId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!roomId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try{
        // Recherche de l'Salon et vérification
        let room = await db.room.findOne({ where: {id: roomId}, raw: true})
        if(room === null){
            return res.status(404).json({ message: 'This room does not exist !'})
        }

        // Mise à jour de l'Salon
        await db.room.update(req.body, { where: {id: roomId}})
        return res.json({ message: 'room Updated'}), res.status(200)
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }
})







router.delete('/:id',checkTokenexist, (req, res) => {
    let roomId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!roomId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    // Suppression de l'Salon
    db.room.destroy({ where: {id: roomId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})



module.exports = router