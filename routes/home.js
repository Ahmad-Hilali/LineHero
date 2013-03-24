
/*
 * GET users listing.
 */
var persons = [
                { name: "Rachael Smith", img: "Rachael.jpg", rating: 10, time: "32 mins", location:"@SuperStore" }
, { name: "Miranda Walters", img: "Miranda.jpg", rating: 6, time: "15 mins", location: "@SuperStore" }
, { name: "Nick Williams", img: "Nick.jpg", rating: 9, time: "18 mins", location: "@SuperStore" }
, { name: "Nancy Drew", img: "Nancy.jpg", rating: 7, time: "15 mins", location: "@SuperStore" }
, { name: "Saurabh Dutt", img: "Saurabh.jpg", rating: 7, time: "30 mins", location: "@SuperStore" }
, { name: "Thomas Tanks", img: "Thomas.jpg", rating: 2, time: "26 mins", location: "@SuperStore" }
];

function compare(a,b) {
  if (a.time < b.time)
     return 1;
  if (a.time < b.time)
    return -1;
  if (a.rating > b.rating)
     return -1;
  if (a.rating < b.rating)
    return 1;
  return 0
}
exports.index = function(req, res){
	var name=req.params.username;
console.log(name);
	var tempPersons=persons.filter(function (person) { return person.name.replace(" ","").toLowerCase()!=name.toLowerCase(); }).sort(compare);
	
    res.render('home', { title: 'Line Hero - '+name, persons:tempPersons , naam:name });
};
