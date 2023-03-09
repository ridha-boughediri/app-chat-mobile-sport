/************************************/
/*** Import des modules nécessaires */
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

/*******************************/
/*** Définition du modèle NhtTeams */
module.exports = (sequelize) => {
    const NhtTeams = sequelize.define('nhlteams', {
       
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
    


    return NhtTeams
}


/****************************************/
/*** Ancienne Synchronisation du modèle */
//NhtTeams.sync()
//NhtTeams.sync({force: true})
//NhtTeams.sync({alter: true})