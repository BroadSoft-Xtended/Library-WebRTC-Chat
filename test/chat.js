test = require('../node_modules/webrtc-sipstack/test/includes/common')(require('../node_modules/webrtc-core/test/includes/common'));
describe('chat', function() {

  before(function(){
    test.createCore('urlconfig');
    test.createCore('eventbus');
    test.createModelAndView('sipstack', {
      sipstack: require('webrtc-sipstack')
    });
    test.createModelAndView('chat', {
      chat: require('../'),
      sipstack: require('webrtc-sipstack')
    });
  });

  it('enableChat', function() {
    chat.enableChat = true;
    expect(chat.classes).toEqual(['enableChat']);
  });
  it('send', function() {
    chat.enableChat = true;
    chat.send('test');
    var id = new Date().getTime()
    expect(chat.messages[id].body).toEqual('test');
    expect(chat.messages[id].direction).toEqual('outgoing');
  });
  it('dataReceived', function() {
    chat.enableChat = true;
    eventbus.emit('dataReceived', {data: 'chat:received text'})
    var id = new Date().getTime()
    expect(chat.messages[id].body).toEqual('received text');
    expect(chat.messages[id].direction).toEqual('incoming');
  });
});