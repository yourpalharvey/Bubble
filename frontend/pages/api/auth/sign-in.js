require('dotenv').config();
var jwt = require('jsonwebtoken');

var mysql = require('mysql');


// connection details
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "comsc",
    database: 'bubble'
});

export default async function handler(req, res) {

    
    if (req.method === "POST")
    {
        try {
            // get data from q=request
            let username = req.body["username"];
            let password = req.body["password"];

            // check user exists
            let sqlRequest = `SELECT id FROM users WHERE username = ${con.escape(username)} AND password = ${con.escape(password)};`;

            // make query to databse to get userID
            con.query(sqlRequest, (err, result, fields) => {
                if (err) throw err;
                var token = jwt.sign(
                    {
                        user: result[0].id
                    },
                    process.env.JWTSECRET
                );


                // return response
                res.status(200).json({token: token});
                
            });

            
            con.end();
        } 
        catch (error)
        {
            res.status(500).json({"error": error})
        }

        

    }
    else
    {
        res.status(200).json({username: "username"})
    }
}