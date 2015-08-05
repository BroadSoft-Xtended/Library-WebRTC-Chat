module.exports = require('webrtc-core').bdsft.Model(Chat, {
  config: require('../../js/config.js')
});

var Message = require('./message');
var Utils = require('webrtc-core').utils;

function Chat(eventbus, debug, sipstack) {
  var self = {};

  self.props = ['input', 'messages', 'classes', 'visible'];

  self.bindings = {
    classes: {
        self: ['enableChat', 'visible'],
        sipstack: ['callState', 'enableDatachannel']
    }
  }

  var addMessage = function(text) {
    var message = Message.create([text]);
    self.messages.push(message);
  }

  self.send = function(){
    sipstack.sendData("chat:" + self.input);
    addMessage(self.input);
    self.input = '';
  };

  self.init = function() {
    self.messages = [];
  };

  self.listeners = function() {
    eventbus.on('dataReceived', function(e) {
      var data = e.data;
      var regex = /^chat:/;
      if (data.match(regex)) {
        data = data.replace(regex, '');
        addMessage(data);
      }
    });
  };

  return self;
}