// import du package nessaire 
const jwt = require('jsonwebtoken')
// extraire le token

// Je check si il y a un token


const checkTokenexist = (req, res, next) => {
    let token = req.headers.authorization
    // mes console log

    // console.log('HEADERS:', req.headers)
    // console.log('TOKEN:', typeof (token))


    if (!token) {
        return res.status(401).json({ message: "slt petit loup" })
    }
    const lol = token.split(' ')
    if (lol[0] == 'Bearer') {
        // console.log(typeof (lol[1]))
        token = lol[1]
    }
    // verifier la durée et la validité du token
    jwt.verify(token, process.env.JWT_SECRET, (err, decodeToken) => {

        if (err) {

            return res.status(401).json({ message: "mauvais token" })
        }
        next()
    })
}


module.exports = checkTokenexist


