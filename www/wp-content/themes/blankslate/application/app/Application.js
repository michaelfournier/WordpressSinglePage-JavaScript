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
