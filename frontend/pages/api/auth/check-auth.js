require('dotenv').config();
var jwt = require('jsonwebtoken');


export default async function handler(req, res) {

    
    if (req.method === "POST")
    {
        try {
            // get data from q=request
            let token = req.body.token;

            // get userID from token
            var data = jwt.verify(token, process.env.JWTSECRET);
            console.log(data.user);

            // return userId
            res.status(200).json({userID: data.user})
        }
        catch (err)
        {
            res.status(500).json({error: err});
        }
        

    }
    else
    {
        res.status(200).json({username: "username"})
    }
}