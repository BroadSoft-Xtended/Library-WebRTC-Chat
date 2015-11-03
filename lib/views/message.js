module.exports = require('bdsft-sdk-view')(MessageView, {
  template: require('../../js/templates'), 
  style: require('../../js/styles')
})

function MessageView(message) {
  var self = {};

  self.elements = ['body'];

  return self;

}