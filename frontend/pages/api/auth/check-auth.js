require('dotenv').config();
var jwt = require('jsonwebtoken');


export default async function handler(req, res) {

    
    if (req.method === "POST")
    {
        // get data from q=request
        let token = req.body.token;

        // get userID from token
        var data = jwt.verify(token, process.env.JWTSECRET);
        console.log(data.user);

        // return userId
        res.status(200).json({userID: data.user})
        

    }
    else
    {
        res.status(200).json({username: "username"})
    }
}