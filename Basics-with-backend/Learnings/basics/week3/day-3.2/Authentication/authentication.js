/*
*
**
1.Hashing
2.Encryption
3.Jason web tokens
4.Local Sotrage
**
*/

const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456"
const app = express();
app.use(express.json())
const ALL_USERS = [
    {
        username: "chayan@gmail.com",
        password: "1234",
        name: "Chayan"
    },
    {
        username: "raj@gmail.com",
        password: "127873",
        name: "Raj"
    },
    {
        username: "aam@gmail.com",
        password: "123498",
        name: "amm"
    }

];

function userExists(username, password) {
    const user = ALL_USERS.find((user) => {
        return (user.username === username && user.password === password)

    })
    return user !== undefined;
}

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User does'nt exist in out in memory DB!"
        })
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token
    })
})

app.get('/users', (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        const users = ALL_USERS.filter((user) => {
            return user.username != username
        })

        res.json({
            users: users
        })
        //return a list of usrs othe than this username
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token"
        })
    }
})

app.listen(3000, () => {
    console.log("port 3000 is listining!");
})