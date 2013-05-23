require.config( {
   // baseUrl:"/www_test4/",
   paths: {
      domReady: '../lib/require/domReady',
      zepto: '../lib/jquery/zepto',
      underscore: '../lib/underscore/underscore-min',
      backbone: '../lib/backbone/backbone',
      text: '../lib/require/text-1.0.6',
      async: '../lib/require/async',
      handlebars: '../lib/handlebars/handlebars',
      
      /*models-collections-template base paths*/
      tpl: '../templates',
      models: '../js/models',
      collections: '../js/collections',
      
      /*views bare paths*/
      welcome: '../js/views/welcome',
      top_bar: '../js/views/top_bar'

   },
   shim: {
      'zepto': {
         exports: '$'
      },
      'underscore': {
         exports: '_'
      },
      'backbone': {
         deps: ['zepto', 'underscore'],
         exports: 'Backbone'
      },
      'handlebars': {
         exports: 'Handlebars'
      }
   }
} );

// We launch the App
require( ['zepto', 'domReady', 'underscore', 'backbone', 'router'],
        function( $, domReady, _, Backbone, AppRouter ) {

           domReady( function() {
              document.addEventListener( "deviceready", run, false );
           } );

           function run() {

              new AppRouter();
              //Backbone.history.start();
           }
        } );
