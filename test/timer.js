var jsdom = require('mocha-jsdom');
expect = require('expect');
jsdom({});

describe('timer', function() {

  before(function(){
    core = require('webrtc-core');
    testUA = core.testUA;
    config = {enableCallTimer: true};
    testUA.createCore('configuration', config);
    testUA.createCore('sipstack', config);
    testUA.mockWebRTC();
    testUA.createModelAndView('timer', {timer: require('../')});
  });

it('format', function() {
  expect(timerview.text.text()).toEqual( '');
  testUA.startCall();
  expect(timer.text).toEqual( '00:00:00');
});
it('timer on call started with enableCallTimer = true', function() {
  testUA.isVisible(timerview.view, false);
  testUA.startCall();
  testUA.isVisible(timerview.view, true);
  testUA.endCall();
  testUA.isVisible(timerview.view, false);
  expect(timer.text).toEqual( '00:00:00');
});
it('timer on call started with enableCallTimer = false', function() {
  configuration.enableCallTimer = false;
  testUA.isVisible(timerview.view, false);
  testUA.startCall();
  testUA.isVisible(timerview.view, false);
  testUA.endCall();
  testUA.isVisible(timerview.view, false);
});
});