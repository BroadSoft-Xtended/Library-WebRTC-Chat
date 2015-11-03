test = require('../node_modules/webrtc-sipstack/test/includes/common')(require('../node_modules/bdsft-sdk-test/lib/common'));
describe('chat', function() {

  before(function(){
    test.createModelAndView('core', {
  core: require('webrtc-core')
}, 'urlconfig');
    test.createModelAndView('chat', {
      chat: require('../'),
      sipstack: require('webrtc-sipstack'),
      eventbus: require('bdsft-sdk-eventbus'),
      debug: require('bdsft-sdk-debug'),
      core: require('webrtc-core')
    });
    eventbus = bdsft_client_instances.test.eventbus.eventbus;
    sipstack = bdsft_client_instances.test.sipstack.sipstack;
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
    eventbus.emit('dataReceived', {data: {data: 'chat:received text'}})
    var id = new Date().getTime()
    expect(chat.messages[id].body).toEqual('received text');
    expect(chat.messages[id].direction).toEqual('incoming');
  });
});