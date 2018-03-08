
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



app.get('/displayComapany', function(req,res) {
	con.query('select companyName, companyLocation, companyRating from COMPANY;',
		function(err,rows,fields) {
			if (err){
				console.log(err);
				res.send("error:please reload");
			}
			else{
				var str = "<table border=\"1\" style=\"font-family: Trebuchet MS, Arial, Helvetica, sans-serif; border: 1px solid #000; border-collapse: collapse; : 100%; width: auto; padding-top: 12px; text-align: center; margin-bottom: 14px;\"><tr><td>Company Name</td><td>Company Location</td><td>Company Rating</td></tr>"
				for (var i = 0; i < rows.length; i++) {
					str = str + "<tr><td>" + rows[i].companyName + "</td><td>" + rows[i].companyLocation + "</td><td>" + rows[i].companyRating + "</td></tr>";
				};
				str = str + "</table>";
				console.log(str);
				res.send(str);
			};
		});

});

	