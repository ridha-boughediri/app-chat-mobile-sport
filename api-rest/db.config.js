/************************************/
/*** Import des modules nécessaires */
const { Sequelize } = require('sequelize')

/************************************/
/*** Connexion à la base de données */
let sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false
    }
)

/*** Mise en place des relations */
const db = {}

db.sequelize = sequelize
db.user = require('./models/user')(sequelize)
db.message = require('./models/messages')(sequelize)
db.nbaTeams =require('./models/nba_teams')(sequelize)
db.nflTeams =require('./models/nfl_teams')(sequelize)
db.nhlTeams =require('./models/nhl_teams')(sequelize)
db.privateMessage = require('./models/private_message')(sequelize)
db.room = require('./models/room')(sequelize)
db.Sport = require('./models/sport')(sequelize)
db.role = require('./models/role')(sequelize)

// 1 relation user et sport

db.Sport.hasMany(db.user, {foreignKey: 'sport_id', onDelete: 'cascade'})
db.user.belongsTo(db.Sport, {foreignKey: 'sport_id'})

// 2 relation user et nba


db.nbaTeams.hasMany(db.user, {foreignKey: 'nbateam_id', onDelete: 'cascade'})
db.user.belongsTo(db.nbaTeams, {foreignKey: 'nbateam_id'})

// 3 relation user et nfl

db.nflTeams.hasMany(db.user, {foreignKey: 'nflteam_id', onDelete: 'cascade'})
db.user.belongsTo(db.nflTeams, {foreignKey: 'nflteam_id'})

// 4 relation user et nhl
db.nhlTeams.hasMany(db.user, {foreignKey: 'nhlteam_id', onDelete: 'cascade'})
db.user.belongsTo(db.nhlTeams, {foreignKey: 'nhlteam_id'})

// 5 relation private-message et  user
db.user.hasMany(db.privateMessage, {foreignKey: 'user_id', onDelete: 'cascade'})
db.privateMessage.belongsTo(db.user, {foreignKey: 'user_id'})

// 6 relation message et user 
db.user.hasMany(db.message, {foreignKey: 'user_id', onDelete: 'cascade'})
db.message.belongsTo(db.user, {foreignKey: 'user_id'})

// 7 relation user et role
db.role.hasMany(db.user, {foreignKey: 'role_id', onDelete: 'cascade'})
db.user.belongsTo(db.role, {foreignKey: 'role_id'})

// 8 relation room et message 

db.message.hasMany(db.room, {foreignKey: 'message_id', onDelete: 'cascade'})
db.room.belongsTo(db.message, {foreignKey: 'message_id'})









/*********************************/
/*** Synchronisation des modèles */
sequelize.sync(err => {
    console.log('Database Sync Error', err)
})
db.sequelize.sync({alter: true})

module.exports = db


