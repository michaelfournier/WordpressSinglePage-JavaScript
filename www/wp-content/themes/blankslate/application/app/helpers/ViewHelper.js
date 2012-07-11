/**
 * Handlebars Template Helpers
 * 
 * @langversion JavaScript
 * 
 * @author 
 * @since  
 */


//--------------------------------------
//+ PUBLIC PROPERTIES / CONSTANTS
//--------------------------------------

//--------------------------------------
//+ PUBLIC METHODS / GETTERS / SETTERS
//--------------------------------------

/*
* @return String
*/
Handlebars.registerHelper( 'link', function( text, url ) {

  text = Handlebars.Utils.escapeExpression( text );
  url  = Handlebars.Utils.escapeExpression( url );

  var result = '<a href="' + url + '">' + text + '</a>';

  return new Handlebars.SafeString( result );
});
