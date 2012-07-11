###
 * View Description
 * 
 * @langversion CoffeeScript
 * 
 * @author 
 * @since  
 ###

ApplicationConfig	= require('config/ApplicationConfig')
View				= require('./supers/View')
template			= require('./templates/HomeViewTemplate')

module.exports = class HomeView extends View

	###//--------------------------------------
	//+ PUBLIC PROPERTIES / CONSTANTS
	//--------------------------------------###

  	#
   	# @private
	#
	id: 'content-page'
	#
   	# @private
	#
	template: template

	###//--------------------------------------
  	//+ INHERITED / OVERRIDES
  	//--------------------------------------###

	#
   	# @private
	#
	initialize: ->
		@render = _.bind( @render, @ )

	#
   	# @private
	#
	render: ->

		$.ajax
			url: ApplicationConfig.API + "get_recent_posts/"
			success: ( e ) =>
				console.log e

				@$el.html( @template( {
					content: "Successfully received recent posts; view browser console for output."
				} ) )

			error: ( e ) =>
				console.log e

				@$el.html( @template( {
					content: "Error: #{ e }"
				} ) )

		return @

	###//--------------------------------------
	//+ PUBLIC METHODS / GETTERS / SETTERS
	//--------------------------------------###

	###//--------------------------------------
	//+ EVENT HANDLERS
	//--------------------------------------###

	###//--------------------------------------
	//+ PRIVATE AND PROTECTED METHODS
	//--------------------------------------###
