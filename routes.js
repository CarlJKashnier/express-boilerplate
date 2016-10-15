// ###require('./passport.js');

module.exports = function (app, passport){
  app.get('/', function(req,res){
    res.send('Hello, world!')
    res.end(200)
  });
}
