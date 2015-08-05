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

  var addMessage = function(text, direction) {
    var message = Message.create([text, direction]);
    self.messages[message.id] = message;
  }

  self.send = function(text){
    text = text || self.input;
    debug.log('send : '+text);
    sipstack.sendData("chat:" + text);
    addMessage(text, 'outgoing');
  };

  self.init = function() {
    self.messages = {};
  };

  self.listeners = function() {
    eventbus.on('dataReceived', function(e) {
      var data = e.data;
      var regex = /^chat:/;
      if (data.match(regex)) {
        data = data.replace(regex, '');
        debug.log('received : '+data);
        addMessage(data, 'incoming');
      }
    });
  };

  return self;
}