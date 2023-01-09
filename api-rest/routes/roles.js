
const express = require('express')
let router = express.Router()
const checkTokenexist= require('../JWT/verif')

const role = require('../models/role')


const db = require('../db.config')
// const User = require('../models/user')
const { user } = require('../db.config')

// mon middleware pour role selon la route


router.use((req,res,next)=>{
    const event = new Date()
    
    console.log('Role Time:', event.toString())
    next()
    

})



router.get('/', checkTokenexist, (req, res) => {
    db.role.findAll()
        .then(roles => res.json({ data: roles }))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})



router.get('/:id', checkTokenexist, async (req, res) => {
    let roleId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!roleId) {
        return res.json(400).json({ message: 'Missing Parameter' })
    }

    try {
        // Récupération de l'utilisateur et vérification
        let role = await db.role.findOne({ where: { id: roleId }, include:{model:user} })
        if (role === null) {
            return res.status(404).json({ message: 'le role  does not exist !' })
        }

        return res.json({ data: role })
    } catch (err) {
        return res.status(500).json({ message: 'Database Error', error: err })
    }
})

router.post('',checkTokenexist, async (req, res) => {
    const { role,num_role} = req.body


       // Validation des données reçues
       if (!role || !num_role) {
        return res.status(400).json({ message: 'Missing Data' })
    }



    try{
        // Vérification si l'role existe déjà
        const role = await db.role.findOne({ where: { role: role }, raw: true })
        if (role !== null) {
            return res.status(409).json({ message: `The role ${role} already exists !` })
        }

       
        // Création de l'role
        let roles = await db.role.create(req.body)
        return res.json({ message: 'role Created', data: roles })

    }catch(err){
        if(err.name == 'SequelizeDatabaseError'){
            res.status(500).json({ message: 'Database Error', error: err })
        }
        res.status(500).json({ message: 'Hash Process Error', error: err})        
    }
})



router.patch('/:id',checkTokenexist, async (req, res) => {
    let roleId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!roleId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    try{
        // Recherche de l'Salon et vérification
        let role = await db.role.findOne({ where: {id: roleId}, raw: true})
        if(role === null){
            return res.status(404).json({ message: 'This role does not exist !'})
        }

        // Mise à jour de l'Salon
        await db.role.update(req.body, { where: {id: roleId}})
        return res.json({ message: 'role Updated'})
    }catch(err){
        return res.status(500).json({ message: 'Database Error', error: err })
    }
})







router.delete('/:id',checkTokenexist, (req, res) => {
    let roleId = parseInt(req.params.id)

    // Vérification si le champ id est présent et cohérent
    if (!roleId) {
        return res.status(400).json({ message: 'Missing parameter' })
    }

    // Suppression de l'Salon
    db.role.destroy({ where: {id: roleId}, force: true})
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
})



module.exports = router