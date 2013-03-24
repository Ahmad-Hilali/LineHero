
/*
 * GET users listing.
 */
var persons = [
                { name: "Rachael Smith", img: "Rachael.jpg", rating: 10, time: "32 mins", location:"@SuperStoreMT",num:2 }
, { name: "Miranda Walters", img: "Miranda.jpg", rating: 6, time: "15 mins", location: "@SuperStoreMT",num:14 }
, { name: "Nick Williams", img: "Nick.jpg", rating: 9, time: "18 mins", location: "@SuperStoreMT" ,num:11}
, { name: "Nancy Drew", img: "Nancy.jpg", rating: 7, time: "15 mins", location: "@StarbuckMTFc",num:13 }
, { name: "Saurabh Dutt", img: "Saurabh.jpg", rating: 7, time: "30 mins", location: "@StarbuckMTFc",num:1 }
, { name: "Thomas Tanks", img: "Thomas.jpg", rating: 2, time: "26 mins", location: "@SuperStoreMT",num:5 }
];

function compare(a,b) {
 if (a.location < b.location)
     return 1;
  if (a.location > b.location)
	return -1;
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
