'use strict';
angular.module('copayApp.services').factory('aibService', function(nextStepsService) {
  var root = {};

  var nextStepItem = {
    name: 'aib-web-site',
    title: 'Visit AIB Website',
    icon: 'icon-aib', // TODO: change to AIB icon
    sref: 'https://www.aib.one'
  };

  var register = function() {
    nextStepsService.register(nextStepItem)
  };

  register();
  return root;
});
