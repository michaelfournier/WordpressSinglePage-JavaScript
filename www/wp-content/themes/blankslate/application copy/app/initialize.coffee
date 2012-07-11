###
 * Application Initializer
 * 
 * @langversion CoffeeScript
 * 
 * @author 
 * @since  
 ###

application = require('Application')

$ ->
	
	# Initialize Application
	application.initialize()

	# Start Backbone router
	Backbone.history.start()
