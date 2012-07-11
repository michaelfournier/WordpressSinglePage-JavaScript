###
 * Backbone Primary Router
 * 
 * @langversion CoffeeScript
 * 
 * @author 
 * @since  
 ###

application = require( 'Application' )

module.exports = class Router extends Backbone.Router

	###//--------------------------------------
  	//+ Routes
  	//--------------------------------------###
  	
	routes:
    		'' : 'home'

	###//--------------------------------------
	//+ Route Handlers
	//--------------------------------------###

	home: ->
    		$( 'body' ).html( application.homeView.render().el )
