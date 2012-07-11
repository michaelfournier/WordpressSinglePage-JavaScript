/**
 * Application Configuration
 * 
 * @langversion JavaScript
 * 
 * @author 
 * @since  
 */

var ApplicationConfig = (function() {

	/*
   	 * @private
	 */
	this.BASE_URL = "http://localhost:8888/CN/WordpressBackbone-JavaScript/www/";

	this.WP_TEMPLATE_URL = this.BASE_URL + "wp-content/themes/blankslate/";

	this.API = this.BASE_URL + "api/";

	this.API_METHODS = {
		recentPosts: this.API + "get_recent_posts",
		byCategory: this.API + "get_category_posts/?slug=",
		byPost: this.API + "get_post/?slug=",
		byPage: this.API + "get_page/?slug=",
		bySearch: this.API + "get_search_results/?search="
	};

	this.BROWSER = {
  		name: "",
  		version: -1
  	};
  	
	this.GOOGLE_CHROMEFRAME_ENABLED = false

	return this;

}).call()

module.exports = ApplicationConfig;