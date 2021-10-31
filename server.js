const e = require('express');
var express = require('express'); // require the express framework
var app = express();
var fs = require('fs'); // require filesystem module


// making constant variables for host and port
const host = '127.0.0.1';
const port = '8080';

//endpoint to get all user
app.get('/getUsers' , function(req ,res){
    fs.readFile(__dirname + "/" + "user.json" , 'utf8' , function(err , data){
        if(err){
            res.statusCode(500).send("Sorry there is an error");
        }
        else{
            res.end(data)
        }
    });
});

//endpoint to get users by id
app.get('/getuser/:id' , function(req , res){
    fs.readFile(__dirname + "/" + "user.json" , 'utf-8' , function(err ,data){
        if(err){
            res.statusCode(404).send("User Not Found");
        };
        var users = JSON.parse(data);
        var user = users["user" + req.params.id];
        // console.log(user);
        res.end(JSON.stringify(user));
    })
});


//delete an existing user
app.delete('/deleteuser/:id' , function(res , req){
    fs.readFile(__dirname + "/" + "user.json" , 'utf-8' , function(err , data){
        if(err){
            res.statusCode(404).send("sorry Not found");
        }
        
        data = JSON.parse(data);
        // var user = users["user" + req.params.id];

        delete data["user" + 3];
        res.end("User Deleted Successfully");
    });
});

// Create a Server to listen at port 8080
var server = app.listen(port , function(){
    console.log(`Server is listening on http://${host}:${port}`);
});

