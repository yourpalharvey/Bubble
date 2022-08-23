import { checkUsername } from '../../../logic/auth';
import { cleanDate } from '../../../logic/cleaning';

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
        try
        {
            // get data from q=request
            let username = req.body["username"];
            let password = req.body["password"];
            let email = req.body["email"];
            let dob  = cleanDate(req.body["dob"]);

            // check username is free
            const usernameValid = await checkUsername(username);

            if (usernameValid)
            {
                let sqlRequest = `INSERT INTO users (username, email, password, dob) VALUES (${con.escape(username)}, ${con.escape(email)}, ${con.escape(password)}, ${con.escape(dob)});`;
                console.log(sqlRequest);

                let response = con.query(sqlRequest, (err, result) => {
                    if (err) throw err;
                    return result;
                });
                
                con.end();

                res.status(200).json({message: 'User added'});
            }
            else
            {
                res.status(200).json({message: "Username exists"});
            };
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