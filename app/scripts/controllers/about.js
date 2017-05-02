'use strict';

/**
 * @ngdoc function
 * @name kimberlyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kimberlyApp
 */
angular.module('kimberlyApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("email","email",
"Please enter a valid email address");