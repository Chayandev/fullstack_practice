//how dose the backend conet to the databse usign libraries

/*
1.Express lets u create an HTTP server
2.Jsonwebtokens library lets you create jets
3.Mongoose lets you connect to your databse
*/


const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtPassword = '123456';

const app = express();
app.use(express.json());

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);

mongoose.connect(
    "mongodb+srv://admin:Chayan%402004@cluster0.cmuy00c.mongodb.net/user_app"
    //{ useNewUrlParser: true, useUnifiedTopology: true }
);

async function createUser(username, password, email) {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) return false;

    // const user = new User({
    //     username: username,
    //     email: email,
    //     password: password
    // });

    // await user.save();

    //or
    await User.create({
        username: username,
        email: email,
        password: password
    });
    return true;
}

app.post("/signup", async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const isUserCreated = await createUser(username, password, email);
        console.log(isUserCreated)
        if (isUserCreated) {
            return res.json({
                "msg": "User created successfully!"
            });
        }

        return res.status(400).send("User email already exists!");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

app.listen(3000, () => {
    console.log("port 3000 is listening!");
});


//