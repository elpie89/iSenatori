define(
        ["zepto",
           "underscore",
           "backbone",
           "welcome/wrapper",
        "persone/wrapper"],
        function( $, _, Backbone, WelcomeWrap, PersoneWrap ) {

           var AppRouter = Backbone.Router.extend( {
              routes: {
                 "": "welcome",
                 "persone/:id": "personaDetails",
                 "persone": "persone",
                 "votazioni/:id": "votazioniDetails",
                 "votazioni": "settings"
              },
              welcome: function( ) {
                 this.flipPage( WelcomeWrap );
              },
              persona: function() {
                 this.flipPage( PersoneWrap );
              },
              flipPage: function( View ) {

                 this.prevView = this.currentView;
                 this.currentView.remove();

                 this.currentView = new View( {uiProperties: uiProperties} );
              }

           } );
           return AppRouter;
        } );
