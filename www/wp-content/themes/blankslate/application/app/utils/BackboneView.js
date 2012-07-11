/**
 * View Description
 * 
 * @langversion JavaScript
 * 
 * @author 
 * @since  
 */

var View = require('./supers/View');
var template = require('templates/HomeViewTemplate');

module.exports = View.extend({

	//--------------------------------------
	//+ PUBLIC PROPERTIES / CONSTANTS
	//--------------------------------------

  	/*
   	 * @private
	 */
	id: 'view',
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
		this.$el.html( this.template( this.getRenderData() ) );

		return this;
	},

	/*
	 * @private
	 */
	getRenderData: function() {
		return {
			content: "View Content"
		}
	}

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
