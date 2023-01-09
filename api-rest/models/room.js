/************************************/
/*** Import des modules nécessaires */
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

/*******************************/
/*** Définition du modèle Room */
module.exports = (sequelize) => {
    const Room = sequelize.define('room', {
       
            id: {
                type: DataTypes.INTEGER(10),
                primaryKey: true,
                autoIncrement: true
            },
            
    
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
            
            
    }, { paranoid: true })           // Ici pour faire du softDelete
    


    return Room
}


/****************************************/
/*** Ancienne Synchronisation du modèle */
//Room.sync()
//Room.sync({force: true})
//Room.sync({alter: true})