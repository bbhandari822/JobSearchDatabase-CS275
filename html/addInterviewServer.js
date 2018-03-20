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

utils.inherits(addInterviewFront, EventEmitter);

function addInterviewFront(){
}
//pulls the code from addInterviewFront file
addInterviewFront.prototype.render = function(){
    var data = fs.readFileSync('./addInterviewFront.html', 'utf8');
    return data;
  }
//set the elements of the INTERVIEW class from the fs. request
addInterviewFront.prototype.addNewInterview= function(body){

    //escape to prevent injection
    var id = mysql.escape(body.interviewID);
    var name = mysql.escape(body.companyName);
    //var userName = mysql.escape(body.userName);
    var interviewTy = mysql.escape(body.interviewType);
    var interviewLevel = mysql.escape(body.levelOfDifficulty);
    var interviewQue = mysql.escape(body.sampleInterviewQuestions);
    var interviewedOn = mysql.escape(body.companyInterviewDate);
    var userEmail = mysql.escape(body.userEmail);


//add the new company to the database
    con.query('SELECT interviewID FROM finalProject.INTERVIEW WHERE interviewID='+id+';',
    
    function(err,rows,fields){
        if (err){
        console.log(err);
        console.log ('Error during query processing');
        }
        else if(rows.length!=0){
            console.log('INTERVIEW already exist')
        }
        else{
            con.query('INSERT INTO finalProject.INTERVIEW  (companyName, userName, interviewType, levelOfDifficulty, sampleInterviewQuestions, companyInterviewDate) VALUES('+name+','+userEmail+','+interviewTy+','+interviewLevel+','+interviewQue+','+interviewedOn+');',
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

addInterviewFront.prototype.displayInterviewss = function(){

    var self = this;
    con.query('select companyName, interviewType, levelOfDifficulty, sampleInterviewQuestions, companyInterviewDate from INTERVIEW;',
    function(err,rows,fields) {
        if (err){
            console.log(err);
            res.send("error:please reload");
        }
        else{
            var str = "<table border=\"1\" style=\"font-family: Helvetica, Arial, sans-serif; border: 1px solid #000; border-collapse: collapse; : 100%; width: auto; padding-top: 12px; text-align: center; margin-bottom: 14px;\"><tr><td><b>Company Name</b></td><td><b>Interview Type</b></td><td><b>Interview Difficulty</b></td><td><b>Interview Questions</b></td><td><b>Interview Date</b></td></tr>"
            for (var i = 0; i < rows.length; i++) {
                str = str + "<tr><td>" + rows[i].companyName + "</td><td>" + rows[i].interviewType + "</td><td>" + rows[i].levelOfDifficulty +  "</td><td>" + rows[i].sampleInterviewQuestions + "</td><td>" + rows[i].companyInterviewDate +  "</td></tr>";
            };
            str = str + "</table>";
            self.emit("DONEE", str);
        };
    });
    
}


module.exports = addInterviewFront;
