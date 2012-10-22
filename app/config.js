// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
//  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",
    vendor: "../assets/vendor",

    // Libraries.
    jquery: "../assets/js/libs/jquery",
    underscore: "../assets/js/libs/underscore",
    backbone: "../assets/js/libs/backbone",
    handlebars: "../assets/js/libs/handlebars-1.0.0.beta.6",
    json2: "../assets/js/libs/json2",
    i18nprecompile: "../assets/js/libs/i18nprecompile",

    // Plugins
    marionette : "../assets/js/plugins/backbone.marionette",
    wreqr: "../assets/js/plugins/backbone.wreqr",
    eventbinder: "../assets/js/plugins/backbone.eventbinder",
    hbs: "../assets/js/plugins/hbs",
    handlebars_helpers: "../assets/js/helpers",
    bmh: "../assets/js/plugins/backbone.marionette.handlebars",
    
    // vendor
    bootstrap: "../assets/vendor/h5bp/js/bootstrap" 
  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },

    marionette: {
      deps: ["backbone", "underscore", "wreqr", "eventbinder"],
      exports: "Backbone.Marionette"
    },

    // Handlebars has no dependencies.
    handlebars: {
      exports: "Handlebars"
    },

    json2 : {
      exports : 'JSON'
    },

    handlebars_helpers: ['handlebars'],

    bmh : {
      deps: ['backbone', 'marionette'],
      exports: 'bmh'
    },
    
    bootstrap: ["jquery"],
    
    "plugins/backbone-localstorage": ["backbone"],

    
  },
  deps: ["jquery", "underscore"]
});

require(['app', 'marionette', 'router'], 
  function(App, Marionette) {
    'use strict';

    App.start();
});
