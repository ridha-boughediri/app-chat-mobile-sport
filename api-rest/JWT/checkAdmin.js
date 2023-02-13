const jwt = require('jsonwebtoken')

const checkId = (req, res, next) => {
    const token = req.headers.authorization
    jwt.verify(token, process.env.JWT_SECRET,(err,decodeToken) =>{
        const tok=decodeToken
        if(tok.role_id==2){
            
            next()
        }
        else{
            return res.status(401).json({message:"Vous n'etes pas admin"})
        }

    })

}
module.exports = checkId