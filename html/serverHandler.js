
var http = require('http');
var url = require('url');
var fs = require("fs");
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

con.connect(function(err) {
	if (err) {
		console.log("Error connecting to database");
	}
	else {
		console.log("Database sucessfully connected");
	}
});

app.listen(8080, function(){console.log('Server started...');
});

app.get('/', function(req, res){
	fs.readFile("index.html", function(err, data){
		if(err){
			console.log(err);
			res.writeHead(404);
			res.write("Not Found!");
		}
		else{
			res.writeHead(200,{'Content-Type': "text/html"});
			res.write(data);
		};
		res.end();	
	});	
});

app.get('/loadMain', function(req, res){
	var html = '';
	html += '<center><h2 style=\"font-family: Arial,sans-serif Helvetica;\">Welcome to the Drexel Coop App!</h2></center>';
	html += '<center><h2 style=\"font-family: Arial,sans-serif Helvetica;\">To access content, click the <b>Menu</b> button in the top left corner, which will open a menu.</p></center>';
	res.send(html);

});


app.get('/login', function(req, res) {
	var userEmail = req.query.email;
	var userPassword = req.query.password;
	con.query('Select * from USER where Email =\"'+ userEmail +'\";',
		function(err,rows,fields) {
			if (err){
				res.send("Incorrect Password/Email");
			}
			else{
				if(rows[0].Password == userPassword){
					console.log("correct info");
					var role = rows[0].RoleID;
					res.send(role);
				}
				else{
					console.log("incorrect info");
					res.send("Incorrect Password/Email");
				};
					
			};
		});
});
	app.get('/findCompany', function(req,res) {
		var html = "";
		var companyId =req.query.companyId;
		con.query('select * from COMPANY where companyId="'+companyId+'";',
		function(err,rows,fields) {
			if (err){
				res.send("error:please reload");
			}
			else{

				//need to implement

			};
		});

	});
	