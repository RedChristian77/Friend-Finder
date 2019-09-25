let people = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.Json(people);
    });

    app.post("/api/friends",function(req,res){
        people.push(req.body);
        res.json(people);
    })
}