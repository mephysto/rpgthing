(function () {
	'use strict';
	console.log('main js initiated');

	var config = {}, underscore, bootstrap;
		config.paths = {
			'vendor' : '../js/vendor',
			'root' : '../',
			'examples' : '..'	
		}

	underscore = require({
		content : 'underscore'
	});
	bootstrap = require({
		content : 'bootstrap', 
		paths : config.paths });
	});
	
	underscore(['underscore'], function(_){
		window._ = _;
		bootstrap([
			'vendor/json2',
			'order!vendor/jquery-1.6.4',
			'order!root/backbone',
			'order!examples/backbone-localstorage',
			'order!todos.js'
		], function (a, b, c, d, app) {
			app.init();
		})
	})
}());


/*
var thePlayer = {
	HP: 100,
	MP: 100,
	LVL: 1,
	Armor: 100,
	Atk: 1
}

var Player = (function () {
	var instance;
	function init () {
    // Private methods and variables
    function privateMethod(){
      console.log( "I am private" );
    }
 
    var privateVariable = "Im also private";
 
    var privateRandomNumber = Math.random();
 
    return {
      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },
 
      publicProperty: "I am also public",
 
      getRandomNumber: function() {
        return privateRandomNumber;
      }
 
    };
	} // end init

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  };
})();

var thePlayer = Player.getInstance();


alert('yo');

Person = Backbone.Model.extend({
	intialize: function(){
		console.log('intialized');
	}
})
function savePlayer(){
	localStorage.setItem('player', JSON.stringify(thePlayer));
}
function loadPlayer(){
	thePlayer = JSON.parse(localStorage.getItem('player'));
}

*/