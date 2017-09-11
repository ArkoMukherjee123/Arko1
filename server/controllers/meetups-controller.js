var Meetup = require('../models/meetup');

module.exports.create = function (req,res) {
  var meetup = new Meetup(req.body);
  meetup.save(function (err, result) {
    res.json(result);
	//console.log("After Post", mongoose.connection.readyState);
  });
}

module.exports.list = function (req,res) {
  Meetup.find({}, function (err,results) {
    res.json(results);
	//console.log("After Get", mongoose.connection.readyState);
  });
}
