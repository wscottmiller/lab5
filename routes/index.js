// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', {
		'friends' : [
			{
			'image': 'http://lorempixel.com/500/500/people',
			'name' : 'Doug Engelbart',
			'description' : 'I have no friends :)'
			},
			{
			'image': 'http://lorempixel.com/500/500/people',
			'name' : 'Ivan Sutherland',
			'description' : 'I have no friends :)'
			},
			{
			'image': 'http://lorempixel.com/500/500/people',
			'name' : 'Got dumps like a truck!',
			'description' : 'truck, truck'
			},
			{
			'image': 'http://lorempixel.com/500/500/people',
			'name' : 'Thighs like what!',
			'description' : 'what, what'
			}
			
	    ]
	});
};