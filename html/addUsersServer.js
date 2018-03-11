
var fs = require('fs');//use file sync to read
var EventEmitter = require('events').EventEmitter;
var utils = require('util');
var http = require('http');
var url = require('url');
var express = require('express');
var app = express();
var bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'binod',
	password: 'password',
	database: 'finalProject'
});

function addUsers(){
    EventEmitter.call(this);
}

addUsers.prototype.render = function(){
    var data = fs.readFileSync('./addUsers.html', 'utf8');
    return data;
}

addUsers.prototype.addNewUser = function(body){

    //escape to prevent injection
    var id = mysql.escape(body.studentID);
    var lastname = mysql.escape(body.lastName);
    var firstname = mysql.escape(body.firstName);
    var password = mysql.escape(body.Password);
    var email = mysql.escape(body.Email);

    con.query('SELECT studentID FROM finalProject.USER WHERE studentID='+id+';',
    
    function(err,rows,fields){
        if (err){
        console.log(err);
        console.log ('Error during query processing');
        }
        else if(rows.length!=0){
        return ('User already exist')
        }
        else{
        con.query('INSERT INTO finalProject.USER  (studentID, lastName, firstName, Password, Email) VALUES('+id+','+lastname+','+firstname+','+password+','+email+');',
            function(err,rows,fields){
            if (err){
                console.log('Error during query processing');
                console.log(err);
                console.log ('Error during insertion');
            }
            else{
                console.log ('Successfully Added');
            }
        });
    }});
}

utils.inherits(addUsers, EventEmitter);
module.exports = addUsers
