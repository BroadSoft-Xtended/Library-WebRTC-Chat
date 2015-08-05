test = require('../node_modules/webrtc-sipstack/test/includes/common')(require('../node_modules/webrtc-core/test/includes/common'));
describe('chat', function() {

  before(function(){
    test.createCore('urlconfig');
    test.createModelAndView('sipstack', {
      sipstack: require('webrtc-sipstack')
    });
    test.createModelAndView('chat', {
      timer: require('../'),
      sipstack: require('webrtc-sipstack')
    });
  });

  it('enableChat', function() {
    chat.enableChat = true;
    expect(chat.classes).toEqual(['enableChat']);
  });
});