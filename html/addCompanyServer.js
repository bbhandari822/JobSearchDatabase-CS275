//modules 
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

//connecting to SQL
var con = mysql.createConnection({
	host: 'localhost',
	user: 'binod',
	password: 'password',
	database: 'finalProject'
});

function addCompanyFront(){
    EventEmitter.call(this);
}
//pulls the code from addCompanyFront file
addCompanyFront.prototype.render = function(){
    var data = fs.readFileSync('./addCompanyFront.html', 'utf8');
    return data;
  }
//set the elements of the Company class from the fs. request
addCompanyFront.prototype.addCompany = function(body){

    //escape to prevent injection
    var id = mysql.escape(body.companyID);
    var name = mysql.escape(body.companyName);
    var loc = mysql.escape(body.companyLocation);
    var rate = mysql.escape(body.companyRating);
    var review = mysql.escape(body.companyReview);
    var dateAdded = mysql.escape(body.companyAddedDate);
	
	
//add the new company to the database
    con.query('SELECT companyID FROM finalProject.COMPANY WHERE companyId='+id+';',
    
    function(err,rows,fields){
        if (err){
        console.log(err);
        console.log ('Error during query processing');
        }
        else if(rows.length!=0){
            console.log('Company already exist')
        }
        else{
            con.query('INSERT INTO finalProject.COMPANY  (companyName, companyLocation, companyRating, companyReview, companyAddedDate) VALUES('+name+','+loc+','+rate+','+review+','+dateAdded+');',
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
        }
    });
}

utils.inherits(addCompanyFront, EventEmitter);
//sends database to the client side to be placed in the body
module.exports = addCompanyFront
