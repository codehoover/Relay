//esaurahim
const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfuyui232uhfdwif090';


app.use(cors({credentials:true, origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://esaurahim:OWMlT5WuYUdS2L9Y@cluster0.x4pj90e.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req,res) => {
    const {username,pass} = req.body; //get username and pass from request body
    try{
        const userDoc = await User.create({
            username,
            pass:bcrypt.hashSync(pass,salt)
        });
        res.json(userDoc); // response will return username and pass
    }
    catch(e){
        res.status(400).json(e);
    }


});

app.post('/login', async (req,res) =>{
    const {username,pass} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(pass, userDoc.pass);
    if (passOk){
        //logged in
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token', token).json({
                id:userDoc._id,
                username,
            });
        });
    }else{
        res.status(400).json("incorrect credentials");
    }

})


app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok');
})

app.listen(4000);