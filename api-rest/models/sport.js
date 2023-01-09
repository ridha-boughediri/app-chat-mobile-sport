/************************************/
/*** Import des modules nécessaires */
const { DataTypes } = require('sequelize')

/*******************************/
/*** Définition du modèle Sport */
module.exports = (sequelize) => {
    const Sport = sequelize.define('sport', {
       
            id: {
                type: DataTypes.INTEGER(10),
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
    
            league_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
    }, { paranoid: true })           // Ici pour faire du softDelete
    


    return Sport
}


/****************************************/
/*** Ancienne Synchronisation du modèle */
//Sport.sync()
//Sport.sync({force: true})
//Sport.sync({alter: true})