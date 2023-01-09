
/************************************/
/*** Import des modules nécessaires */
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

/*******************************/
/*** Définition du modèle privateMessage */
module.exports = (sequelize) => {
    const privateMessage = sequelize.define('privatemessage', {
       
            id: {
                type: DataTypes.INTEGER(10),
                primaryKey: true,
                autoIncrement: true
            },
    
            content: {
                type: DataTypes.STRING,
                allowNull: false
            }
    
            
    }, { paranoid: true })           // Ici pour faire du softDelete
    


    return privateMessage
}


/****************************************/
/*** Ancienne Synchronisation du modèle */
//privateMessage.sync()
//privateMessage.sync({force: true})
//privateMessage.sync({alter: true})