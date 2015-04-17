define(function(require, exports, module) {
    'use strict';
	
	var Engine      = require('famous/core/Engine');
    var MainView	= require('js/views/MainView');

	// create the main context
	var mainContext = Engine.createContext();
	var mainView = new MainView();

	mainContext.add(mainView);

});