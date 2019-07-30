var express = require('express')
var app = express()

app.get('/', function(req, res){
  res.render('home.ejs')
})

app.get('/fallinlovewith/:thing', function(req, res){
  var thing = req.params.thing
  res.render('love.ejs', {thingVar: thing.toLowerCase()})
})

app.get('/posts', function(req, res){
  var posts = [
    {title: "Hissing", author: "Sarah"},
    {title: "Aliens R Cool", author: "Nicki"},
    {title: "Machines", author: "Eric"},
  ]
  res.render('posts.ejs', { posts: posts })
})
app.listen(3000, function(){
  console.log("mystery science port 3000")
})