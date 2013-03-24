
/*
 * GET users listing.
 */
var persons = [
                { "name": "Rachael Smith", "img": "Rachael.jpeg", "rating": 10, "time": "32 mins" }
, { "name": "Miranda Walters", "img": "miranda.jpeg", "rating": 6, "time": "15 mins" }
, { "name": "Nick Williams", "img": "nick.jpeg", "rating": 9, "time": "18 mins" }
, { "name": "Nancy Drew", "img": "Nancy.jpeg", "rating": 7, "time": "15 mins" }
, { "name": "Saurabh Dutt", "img": "saurabh.jpeg", "rating": 7, "time": "30 mins" }
, { "name": "Thomas Tanks", "img": "thomas.jpeg", "rating": 2, "time": "26 mins" }
];
exports.index = function(req, res){
    res.render('home', { title: 'Line Hero - ' + req.username, persons: persons.every(function (person) { return person.name!=req.username }) });
};
