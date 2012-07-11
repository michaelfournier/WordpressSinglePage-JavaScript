###//CoffeeScript///////////////////////////////////////////////////////////////////
// 
// Copyright 2012 
// 
/////////////////////////////////////////////////////////////////////////////////###

###
 * Application Bootstrapper
 * 
 * @langversion CoffeeScript
 * 
 * @author 
 * @since  
 ###

Application = 

    ###//--------------------------------------
    //+ PUBLIC PROPERTIES / CONSTANTS
    //--------------------------------------###

    ###//--------------------------------------
    //+ INHERITED / OVERRIDES
    //--------------------------------------###

    initialize: ->

        # Import views
        HomeView = require('views/HomeView')
        Router = require('routers/Router')

        # Initialize views
        @homeView = new HomeView()
        @router = new Router()

        Object.freeze? this

module.exports = Application
