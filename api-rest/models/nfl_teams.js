/************************************/
/*** Import des modules nécessaires */
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

/*******************************/
/*** Définition du modèle NftTeams */
module.exports = (sequelize) => {
    const NftTeams = sequelize.define('nflteams', {
       
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
        }
        
            
    }, { paranoid: true })           // Ici pour faire du softDelete
    


    return NftTeams
}


/****************************************/
/*** Ancienne Synchronisation du modèle */
//NftTeams.sync()
//NftTeams.sync({force: true})
//NftTeams.sync({alter: true})