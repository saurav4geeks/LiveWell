var express =require ("express");
var app =express();
const hostname = 'localhost';
const port = '3000';
var bodyParser = require("body-parser");
const path = require("path");
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'UxEzDVuXJNZhEnrMYgOCuXAL__r0TAiKM7nhjIVukvVbOXmGVD5T4EuqGs_k9DdA',
  baseURL: 'http://localhost:3000',
  clientID: 'l4mymnaSnVJyaiJRjxnYirrVax06tEOB',
  issuerBaseURL: 'https://dev-bwml3dpb.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? res.render("index2") : res.render("index"));
});


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine' , 'ejs');

app.get("/anxiety", function(req,res){
    res.render("anxiety");
});
app.get("/stress", function(req,res){
    res.render("stress");
});
app.get("/form", function(req,res){
    res.render("form");
});
app.get("/dashboard",function(req,res){
    res.render("dashboard");
})
app.get("/schizophrenia",function(req,res){
    res.render("schizophrenia");
})
//emailJS

app.listen(port, hostname ,function(){
console.log (`livewell started and running at port name-${hostname}:${port}`);
console.log("livewell Started");
});