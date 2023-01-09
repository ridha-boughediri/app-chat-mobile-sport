
const express = require('express')
const checkTokenexist= require('../JWT/verif')

const privateMessage = require('../models/private_message')
let router = express.Router()
const io = require('socket.io')
const db= require('../db.config')

// mon middleware pour PrivateMessage selon la route


router.use((req,res,next)=>{
    const event = new Date()
    
    console.log('PrivateMessage Time:', event.toString())
    next()
    

})




router.get('/', (req, res) => {
    db.privateMessage.findAll()
        .then(privateMessages => res.json({ data: privateMessages }), res.status(200))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})



router.get('/:id', async (req, res) => {
    let privateMId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!privateMId) {
        return res.json(400).json({ message: 'Missing Parameter' })
    }

    try {
        // Récupération de l'utilisateur et vérification
        let privateMessage = await db.privateMessage.findOne({ where: { id: privateMId } })
        if (privateMessage === null) {
            return res.status(404).json({ message: 'This user does not exist !' })
        }

        return res.json({ data: privateMessage }), res.status(200)
    } catch (err) {
        return res.status(500).json({ message: 'Database Error', error: err })
    }
})

router.post('',checkTokenexist, async (req, res) => {
    const {content } = req.body

    // Validation des données reçues
    if (!content) {
        return res.status(400).json({ message: 'Missing Data' })
    }

    try{
        // Vérification si l'PrivateM existe déjà
        const privateMessage = await db.privateMessage.findOne({ where: { content: content }, raw: true })
        if (privateMessage !== null) {
            return res.status(409).json({ message: `The privateMessage ${content} already exists !` })
        }

       
        // Céation de l'PrivateM
        let privateMessagec = await db.privateMessage.create(req.body)
        io.on("connection", (socket)=>{
            socket.emit(req.body);
        })
        return res.json({ message: 'privateMessage Created', data: privateMessagec }), res.status(200)

    }catch(err){
        if(err.name == 'SequelizeDatabaseError'){
            res.status(500).json({ message: 'Database Error', error: err })
        }
        res.status(500).json({ message: 'Hash Process Error', error: err})        
    }
})



router.post('/:id',checkTokenexist, async (req, res) => {
    let privateMessageId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!privateMessageId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try{
        // Recherche de l'PrivateM et vérification
        let privateMessage = await privateMessage.findOne({ where: {id: privateMessageId}, raw: true})
        if(privateMessage === null){
            return res.status(404).json({ message: 'This privateMessage does not exist !'})
        }

        // Mise à jour de l'PrivateM
        await PrivateMessage.update(req.body, { where: {id: privateMessageId}})
        return res.json({ message: 'privateMessage Updated'}), res.status(200)
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }
})




router.delete('/:id',checkTokenexist, (req, res) => {
    let privateMessageId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!privateMessageId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    // Suppression de l'PrivateM
    db.privateMessage.destroy({ where: {id: privateMessageId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})



module.exports = router