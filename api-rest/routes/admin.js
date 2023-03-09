const { Op } = require('sequelize')
const express = require('express')

const bcrypt = require('bcrypt')

let router = express.Router()

const db = require('../db.config')


const checkTokenexist = require('../JWT/verif')
const checkId = require('../JWT/checkAdmin')
const { sequelize } = require('../db.config')

router.use((req, res, next) => {
    const event = new Date()
    console.log('Mesage Time:', event.toString())
    next()
})
router.get('/', checkTokenexist, checkId, async (req, res) => {
    let admin = []
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstDay = new Date(y, m, 1);
    var lastDay = new Date();
     
    users = await db.user.count()
    usersMonth = await db.user.count({
        order: [
            ['createdAt', 'DESC']
        ],
        where: {
            "createdAt": {
                [Op.between]: [firstDay, lastDay]
            }
        }
    })
    admin.push({ "userCount": users })
    rooms = await db.room.count()
    admin.push({ "roomCount": rooms })
    admin.push({ "userMonth": usersMonth })
    const year = new Date().getFullYear(); // l'année pour laquelle vous souhaitez obtenir le nombre de messages

    const countsByMonth = await db.message.findAll({
        attributes: [
            [sequelize.fn('MONTH', sequelize.col('createdAt')), 'month'],
            [sequelize.fn('COUNT', sequelize.col('*')), 'count']
        ],
        group: [sequelize.fn('MONTH', sequelize.col('createdAt'))],
        where: {
            createdAt: {
                [Op.and]: [
                    { [Op.gte]: new Date(`${year}-01-01`) }, // date de début
                    { [Op.lte]: new Date(`${year}-12-31`) } // date de fin
                ]
            }
        },
        raw: true
    });

    // Créer un tableau contenant les 12 mois
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    // Fusionner les résultats de la requête avec le tableau de 12 mois
    const countsByMonthWithZeros = months.map((month) => {
        const match = countsByMonth.find((count) => count.month === month);
        return { month, count: match ? match.count : 0 };
    });
    admin.push(countsByMonthWithZeros)

    res.json(admin)




});
module.exports = router