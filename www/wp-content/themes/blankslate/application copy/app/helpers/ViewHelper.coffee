###
 * Handlebars Template Helpers
 * 
 * @langversion CoffeeScript
 * 
 * @author 
 * @since  
 ###


###//--------------------------------------
//+ PUBLIC PROPERTIES / CONSTANTS
//--------------------------------------###

###//--------------------------------------
//+ PUBLIC METHODS / GETTERS / SETTERS
//--------------------------------------###

#
# @return String
#
Handlebars.registerHelper( 'link', ( text, url ) ->

	text = Handlebars.Utils.escapeExpression( text )
	url  = Handlebars.Utils.escapeExpression( url )

	result = '<a href="' + url + '">' + text + '</a>'

	return new Handlebars.SafeString( result )
)
