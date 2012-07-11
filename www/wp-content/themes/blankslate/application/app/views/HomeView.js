/**
 * View Description
 * 
 * @langversion JavaScript
 * 
 * @author 
 * @since  
 */

var ApplicationConfig = require('config/ApplicationConfig');
var View = require('./supers/View');
var template = require('./templates/HomeViewTemplate');

module.exports = View.extend({

	//--------------------------------------
	//+ PUBLIC PROPERTIES / CONSTANTS
	//--------------------------------------

  	/*
   	 * @private
	 */
	id: 'content-page',
	/*
   	 * @private
   	*/
	template: template,

	//--------------------------------------
  	//+ INHERITED / OVERRIDES
  	//--------------------------------------

	/*
	 * @private
	 */
	initialize: function() {
		this.render = _.bind( this.render, this );
	},

	/*
	 * @private
	 */
	render: function() {
		var _that = this;

		$.ajax({
			url: ApplicationConfig.API + "get_recent_posts/",
			success: function( e ) {
				console.log( e );
				
				$( _that.el ).html( _that.template( {
					content: "Successfully received recent posts; view browser console for output.",
					posts: e.posts
				} ) );
			},

			error: function( e ) {
				console.log( e );

				$( _that.el ).html( _that.template( {
					content: "Error: #{ e }"
				} ) );
			}
		});

		return this;
	},

	//--------------------------------------
	//+ PUBLIC METHODS / GETTERS / SETTERS
	//--------------------------------------

	//--------------------------------------
	//+ EVENT HANDLERS
	//--------------------------------------

	//--------------------------------------
	//+ PRIVATE AND PROTECTED METHODS
	//--------------------------------------

});
