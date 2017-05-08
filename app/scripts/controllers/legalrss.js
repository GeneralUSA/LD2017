'use strict';

/**
 * @ngdoc function
 * @name kimberlyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 *
 * Hi Kimberly, this is the Javascript code for the home page, that corresponds to app/views/main.html
 *
 * When you have time, research MVC (Model View Controller) coding, and Object Oriented Programming
 *
 * The .controller('MainCtrl'), is the name of the controller. If you take a look at /app/scripts/app.js, you will see a table of contents, which
 * uses this javascript file, and app/views/main.html.
 *
 * 
 */

angular.module('kimberlyApp')
  .controller('LegalRssCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


/* http://www.developerdrive.com/2012/03/a-simple-way-to-add-free-news-content-to-your-website/ */
function load() {
var feed ="http://www.loc.gov/rss/pao/news.xml";
		// "http://feeds.bbci.co.uk/news/world/rss.xml";
new GFdynamicFeedControl(feed, "feedControl");

}
google.load("feeds", "1");
google.setOnLoadCallback(load);