/************************************/
/*** Import des modules nécessaires */
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

/*******************************/
/*** Définition du modèle NbaTeams */
module.exports = (sequelize) => {
    const teams = sequelize.define('teams', {
       
            id: {
                type: DataTypes.INTEGER(10),
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
    
            acronyme: {
                type: DataTypes.STRING,
                allowNull: false
            },

            uri_logo: {
                type: DataTypes.STRING,
                allowNull: false
            },

            arena: {
                type: DataTypes.STRING,
                allowNull: true
            },

            conference: {
                type: DataTypes.STRING,
                allowNull: false
            },

            id_sport: {
                type: DataTypes.INTEGER(10),
                allowNull: false
            }
            
    }, { paranoid: true })           // Ici pour faire du softDelete
    


    return teams
}


/****************************************/
/*** Ancienne Synchronisation du modèle */
//NbaTeams.sync()
//NbaTeams.sync({force: true})
//NbaTeams.sync({alter: true})