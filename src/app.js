// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        jquery: 'jquery/jquery-3.1.0',
        backbone: 'backbone/backbone',
        underscore: 'underscore/underscore'
    },
    shim: {
      backbone: {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      },
      underscore: {
        deps: ['jquery'],
        exports: '_'
      }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['jquery', 'app/main', 'underscore'], function($, main, _){
  console.log("Got into app.js");
  $(document).ready(function(){
    console.log("document is ready");
    main.init();
  })
});
