/************************************/
/*** Import des modules nécessaires */
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

/*******************************/
/*** Définition du modèle Role */
module.exports = (sequelize) => {
    const Role = sequelize.define('role', {
       
            id: {
                type: DataTypes.INTEGER(10),
                primaryKey: true,
                autoIncrement: true
            },
            
    
            role: {
                type: DataTypes.STRING,
                allowNull: false
            },

            num_role: {
                type: DataTypes.INTEGER(10),
                allowNull: false,
                
            }


            
            
    }
    ) 
    


    return Role
}


/****************************************/
/*** Ancienne Synchronisation du modèle */
//Role.sync()
//Role.sync({force: true})
//Role.sync({alter: true})