WordpressSinglePage - JavaScript
=====================
v 0.4

WordpressSinglePage is a starting place for building Backbone.js applications on top of WordPress via the Brunch.io app-assembler (Backbone.js, Common.js Modules, CoffeeScript, Handlebars, et al.) and Wordpress JSON api (http://wordpress.org/extend/plugins/json-api/)

Changelog:
- Updated application to support Brunch 1.0+ releases
- Revised application structure to support further configuration
- Replaced EcoTemplates with Handlebars

(For a CoffeeScript version of this project, see: https://github.com/damassi/WordpressBackbone-JavaScript)

Current Version Dependencies:
- Wordpress v 3.3.1+
- Brunch v 1.3.3+

---------------------

About Brunch:

"A lightweight approach to building HTML5 applications with emphasis on elegance and simplicity.

Instead of reinventing the wheel, brunch assembles awesome wheels:

- MVC framework: Backbone.js
- Libs: jQuery (or zepto), Underscore
- Programming languages: JavaScript, CoffeeScript, Roy
- Templates: Eco, Mustache
- Styles: Stylus, LESS, Sass

Everything from the list is optional, you can choose only projects you want. In addition, we have

- HTML5 Boilerplate normalize.css, helpers.css & index.html
- Great directory structure
- A simple express webserver
- require.js-compatible module system
- Source code minifiers: uglify.js for javascript and clean-css for stylesheets.
- textmate / sublime2 bundle
- growl / libnotify support"

http://brunch.io

About Wordpress JSON-API:

"JSON API allows you to retrieve and manipulate WordPress content using HTTP requests. There are three main goals:

- Provide a simple, consistent external interface
- Create a stable, understandable internal implementation
- Enable new types of extensions for WordPress

This plugin was created at The Museum of Modern Art for the weblog Inside/Out, which is served from Ruby on Rails. Instead of reimplementing the site templates as a WordPress theme, we opted for a Rails front-end that displays content served from a WordPress back-end. JSON API provides the necessary interface for retrieving content and accepting comment submissions."

http://wordpress.org/extend/plugins/json-api/other_notes/

***

Includes Google ChromeFrame by default for < IE 9 standards support.  Check can be disabled in ApplicationConfig.coffee.  (TODO: Move Google CF into Wordpress Plugin)

---------------------
Installation
---------------------

Copy the files to an appropriate location on your localhost or server and then follow the below.

Requirements:

1.  Node.JS:

http://nodejs.org/

An installer can be found there for Mac and Windows, as well as more detailed instructions on customization.

2.  Brunch

After installing node, execute via terminal 

npm install -g brunch

(More information can be found at http://brunch.io)

3.  PHP4 or greater

4.  MySQL


***

----------------
Wordpress Setup
----------------

Quick-start:

If you would like to skip the standard Wordpress install, a quick-start database has been provided in the folder db_quickstart.  

1.  Create a new MySQL database and import wp_single_page.sql
2.  Open the database and modify rows 3 and 39 in wp_options to point to your install directory
3.  Open wp-config and adjust the db, username and pass to match your settings
4.  Login at /install_directory/wp-admin; user: admin; pass: password.  These settings can be changed in the Users tab in the back-end

From scratch:

1.  Follow the standard Wordpress installation instructions at Wordpress.org:  http://codex.wordpress.org/Installing_WordPress
2.  Once installed, navigate to the plugins page and enable JSON-API


Brunch Setup:

1.  Navigate to `www/wp-content/themes/blankslate/application/app/config/ApplicationConfig.coffee` and adjust the constant BASE_URL to point to your install directory
2.  More fine-grained control can be found in ...blankslate/application/app/config.coffee
3.  While the default brunch application has already been initialized in themes/blankslate/application, you'll still need to watch the directory for changes and output the files to the default theme directory.  cd into `application` then execute

`brunch build`

4.  If you would like brunch to continually watch for file changes and build, execute

`brunch watch`

This builds your project whenever you save a file and outputs the .js files into themes/blankslate/javascripts and css files into themes/blankslate/stylesheets, which Wordpress's index.php loads upon entry to the site.

More options can be found at http://brunch.io  



