// import du package nessaire 
const jwt = require('jsonwebtoken')
// extraire le token

// Je check si il y a un token

const checkTokenexist = (req, res, next) => {
    let token = req.headers.authorization
     token = token.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "slt petit loup" })
    }

    // verifier la durée et la validité du token
    jwt.verify(token, process.env.JWT_SECRET, (err, decodeToken) => {
        console.log(token)
        console.log(decodeToken)
        if (err) {
            return res.status(401).json({ message: "mauvais token" })
        }
        next()
    })
}


module.exports = checkTokenexist


