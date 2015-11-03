module.exports = require('bdsft-sdk-model')(Message);

function Message(text, direction) {
	var self = {};

	self.props = ['body', 'time', 'id', 'direction', 'classes'];

	self.bindings = {
		classes: {
			self: 'direction'
		}
	};
	
	self.init = function(){
		self.body = text;
		self.time = new Date();
		self.id = new Date().getTime();
		self.direction = direction;
	};

	return self;
}
