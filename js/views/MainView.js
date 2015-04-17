define(function(require, exports, module) {

	var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
    var Modifier = require('famous/core/Modifier');

    function MainView() {
        View.apply(this, arguments);
        _createViews.call(this);
    }

    MainView.prototype = Object.create(View.prototype);
    MainView.prototype.constructor = MainView;

	MainView.DEFAULT_OPTIONS = {};

    function _createViews(){
    	// your app here
		var surface = new Surface({
		  size: [200, 400],
		  content: 'hello world',
		  properties: {
		    color: 'white',
		    textAlign: 'center',
		    backgroundColor: '#FA5C4F'
		  }
		});

		var mod = new Modifier({
            origin: [.5,1],
            align: [.5,0.99]
        });

		this.add(mod).add(surface);
    }

    module.exports = MainView;
});
