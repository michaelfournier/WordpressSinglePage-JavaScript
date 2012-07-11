(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle) {
    for (var key in bundle) {
      if (has(bundle, key)) {
        modules[key] = bundle[key];
      }
    }
  }

  globals.require = require;
  globals.require.define = define;
  globals.require.brunch = true;
})();

window.require.define({"Application": function(exports, require, module) {
  //JavaScript////////////////////////////////////////////////////////////////////
  // 
  // Copyright 2012 
  // 
  ////////////////////////////////////////////////////////////////////////////////

  /**
   * Application Bootstrapper
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  Application = {

      //--------------------------------------
      //+ PUBLIC PROPERTIES / CONSTANTS
      //--------------------------------------

      //--------------------------------------
      //+ INHERITED / OVERRIDES
      //--------------------------------------

      initialize: function() {

          // Import views
          var HomeView = require('views/HomeView');
          var Router = require('routers/Router');

          // Initialize views
          this.homeView = new HomeView();
          this.router = new Router();

          if (typeof Object.freeze === 'function') Object.freeze(this);
      }
  }

  module.exports = Application;
  
}});

window.require.define({"config/ApplicationConfig": function(exports, require, module) {
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
}});

window.require.define({"events/ApplicationEvents": function(exports, require, module) {
  /**
   * Application Events
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  var ApplicationEvents = (function() {

  	/*
     	 * @private
  	 */
  	this.APPLICATION_INITIALIZED = "onApplicationInitialized";

  	return this;
  	
  }).call();

  module.exports = ApplicationConfig;
}});

window.require.define({"helpers/ViewHelper": function(exports, require, module) {
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
  
}});

window.require.define({"initialize": function(exports, require, module) {
  
  /**
   * Application Initializer
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  var application = require('Application');

  $(function() {

  	// Initialize Application
  	application.initialize();

  	// Start Backbone router
    	Backbone.history.start();
  });
  
}});

window.require.define({"models/supers/Collection": function(exports, require, module) {
  /**
   * Base Class for all Backbone Collections
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  module.exports = Backbone.Collection.extend({

  	//--------------------------------------
  	//+ PUBLIC PROPERTIES / CONSTANTS
  	//--------------------------------------

  	//--------------------------------------
  	//+ INHERITED / OVERRIDES
  	//--------------------------------------
  	
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
  
}});

window.require.define({"models/supers/Model": function(exports, require, module) {
  /**
   * Base Class for all Backbone Models
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  module.exports = Backbone.Model.extend({

  	//--------------------------------------
  	//+ PUBLIC PROPERTIES / CONSTANTS
  	//--------------------------------------

  	//--------------------------------------
  	//+ INHERITED / OVERRIDES
  	//--------------------------------------
  	
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
  
}});

window.require.define({"routers/Router": function(exports, require, module) {
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
  
}});

window.require.define({"utils/BackboneView": function(exports, require, module) {
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
  
}});

window.require.define({"views/HomeView": function(exports, require, module) {
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
  			url: ApplicationConfig.API_METHODS.recentPosts,
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
  
}});

window.require.define({"views/supers/View": function(exports, require, module) {
  /**
   * View Base Class
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  require('helpers/ViewHelper');

  module.exports = Backbone.View.extend({

    //--------------------------------------
    //+ PUBLIC PROPERTIES / CONSTANTS
    //--------------------------------------

    /*
     * @private
     */
    template: function() {},
    /*
     * @private
     */
    getRenderData: function() {},

    //--------------------------------------
    //+ INHERITED / OVERRIDES
    //--------------------------------------
    
    /*
     * @private
     */
    initialize: function() {
      this.render = _.bind(this.render, this);
    },

    /*
     * @private
     */
    render: function() {
      this.$el.html( this.template( this.getRenderData() ) );
      this.afterRender();
      
      return this;
    },

    /*
     * @private
     */
    afterRender: function() {}

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
  
}});

