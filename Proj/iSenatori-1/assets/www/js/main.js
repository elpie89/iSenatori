var DB={senatori: null,votazioni:null};

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
      my_parse: '../lib/customLib/my_parse',
      
      /*models-collections-template base paths*/
      tpl: '../templates',
      models: '../js/models',
      collections: '../js/collections',
      
      /*views bare paths*/
      welcome: '../js/views/welcome',
      persone: '../js/views/persone',
      footer: '../js/views/footer',
      topbar:'../js/views/topbar',
      votazioni:'../js/views/votazioni',
      personeDetail:'../js/views/personeDetail',
      votazioniDetail: '../js/views/votazioniDetail'

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
              Backbone.history.start();
           }
        } );
