module.exports = require('webrtc-core').bdsft.Model(Message);

function Message(text) {
	var self = {};

	self.props = ['body', 'time'];

	self.init = function(){
		self.body = text;
		self.time = new Date();
	};

	return self;
}
