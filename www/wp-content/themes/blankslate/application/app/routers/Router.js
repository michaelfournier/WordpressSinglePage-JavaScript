/**
 * Backbone Primary Router
 * 
 * @langversion JavaScript
 * 
 * @author 
 * @since  
 */

var application = require('Application');

module.exports = Backbone.Router.extend({

	//--------------------------------------
  	//+ Routes
  	//--------------------------------------
  	
  	routes: {
      '': 'home'
  	},

  	//--------------------------------------
  	//+ Route Handlers
  	//--------------------------------------

  	home: function() {
      $( 'body' ).html( application.homeView.render().el );
  	}
});
