define(
        ["zepto",
           "underscore",
           "backbone",
           "welcome/wrapper"],
        function( $, _, Backbone, WelcomeWrap ) {

           var AppRouter = Backbone.Router.extend( {
              
              routes: {
                 "": "welcome",
                 "persone/:id": "personeDetails",
                 "persone": "search",
                 "votazioni/:id": "votazioniDetails",
                 "votazioni": "settings"
              },
              welcome: function( ) {
                 this.flipPage( WelcomeWrap );
              },
              flipPage: function( View ) {
                 
                 this.prevView=this.currentView;
                 this.currentView.remove();
                 
                 this.currentView = new View( { uiProperties: uiProperties} );
              }

           } );
           return AppRouter;
        } );
