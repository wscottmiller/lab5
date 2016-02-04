// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', {
		'friends' : [
			{
			'image': 'http://lorempixel.com/500/500/people',
			'name' : 'Doug Engelbart',
			'id' : 'friend1',
			'description' : 'I have no friends :)'
			},
			{
			'image': 'http://lorempixel.com/500/500/people',
			'name' : 'Ivan Sutherland',
			'id' : 'friend2',
			'description' : 'I have no friends :)'
			},
			{
			'image': 'http://lorempixel.com/500/500/people',
			'name' : 'Got dumps like a truck!',
			'id' : 'friend3',
			'description' : 'truck, truck'
			},
			{
			'image': 'http://lorempixel.com/500/500/people',
			'name' : 'Thighs like what!',
			'id' : 'friend4',
			'description' : 'what, what'
			}
			
	    ]
	});
};