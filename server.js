const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData =[
    {name : 'Serly'},
    {name : 'Setyani'}
]
app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'succesfully got users, nice!',
        users: mockUserData
    })
})

app.get('/users/:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "serlyset";
    const mockPassword = "123"

    if (username === mockUsername && password === mockPassword){
        res.json({
            success: true,
            message: 'username and password match',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'username and password do not match'
        })
    }
})

app.listen(8000, function(){
    console.log("server is running")
})