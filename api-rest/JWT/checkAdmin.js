const jwt = require('jsonwebtoken')

const checkId = (req, res, next) => {
    let token = req.headers.authorization
    const lol = token.split(' ')
    if (lol[0] == 'Bearer') {
        // console.log(typeof (lol[1]))
        token = lol[1]
    }
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