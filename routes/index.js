
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Line Hero' });
};
exports.landing = function (req, res) {
    res.render('landing', { title: 'Line Hero' });
};
exports.recommend = function (req, res) {
    res.render('recommend', { title: 'Line Hero - Recommendation' });
};
