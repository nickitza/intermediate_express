var express = require('express')
var app = express()
app.use(express.static("public"))
//how to link assets in the public folder to the app
app.set("view engine", "ejs")
//lets express know our view pages will be .ejs files, can leave the .ejs ext off

app.get('/', function(req, res){
  res.render('home')
})

app.get('/fallinlovewith/:thing', function(req, res){
  var thing = req.params.thing
  res.render('love', {thingVar: thing.toLowerCase()})
})

app.get('/posts', function(req, res){
  var posts = [
    {title: "Hissing", author: "Sarah"},
    {title: "Aliens R Cool", author: "Nicki"},
    {title: "Machines", author: "Eric"},
  ]
  res.render('posts', { posts: posts })
})
app.listen(3000, function(){
  console.log("mystery science port 3000")
})