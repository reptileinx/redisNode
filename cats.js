var _ = require('lodash');

module.exports = function(app) { /*app when passed here is almost like a singleton*/
	_cats = [];

	/*create*/
	app.post('/cat', function(req, res) {
		/*might require validation*/
		_cats.push(req.body);
		res.json({
			info: 'cat created successfully'
		});
	});

	/*read*/
	app.get('/cat', function(req, res) {
		res.send(_cats);
	});

	app.get('/cat:id', function(req, res) {
		res.send(
			/*in the _cats array find the object {name:id}*/
			_.find(
				_cats, {
					name: req.param.id
				}
			));
	});

	/*update */
	app.put('/cat/:id', function(req, res) {
		var index = _.findIndex(
			_cats, {
				name: req.param.id
			}
		);
		_.merge(_cats[index], req.body);

		res.json({
			info: 'cat update successfully'
		});
	});

	/*delete*/
	app.delete('/cat/:id', function(req, res) {

		_.remove(_cats, function(cat) {
			return cat.name === req.param.id;
		});
		res.json({
			info: 'successfully deleted cat'
		});
	});
};