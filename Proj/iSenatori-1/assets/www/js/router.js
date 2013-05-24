define(
        ["zepto",
                "underscore",
                "backbone",
                "welcome/wrapper",
                "persone/wrapper",
                "personeDetail/wrapper",
                "votazioni/wrapper",
                "votazioniDetail/wrapper"],
        function( $, _, Backbone, WelcomeWrap, PersoneWrap, PersoneDetailWrap, VotazioniWrap , VotazioniDetailWrap) {

        var AppRouter = Backbone.Router.extend( {
        routes: {
        "": "welcome",
                "persone/:id": "personaDetails",
                "persone": "persone",
                "votazioni/:id": "votazioneDetails",
                "votazioni": "votazioni"
        },
                welcome: function( ) {
        this.flipPage( WelcomeWrap );
                setTimeout( function( ) {
        Backbone.history.navigate( "persone", {trigger: true} );
        }, 3000 );
        },
                personaDetails: function( id ) {
        console.log( "here" );
                this.flipPage( PersoneDetailWrap, id );
        },
                persone: function( ) {
        this.flipPage( PersoneWrap );
        },
                votazioneDetails: function( id ) {
        this.flipPage( VotazioniDetailWrap, id );
        },
                votazioni: function( ) {
        this.flipPage( VotazioniWrap );
        },
                flipPage: function( View, id ) {

        this.prevView = this.currentView;
                // if ( this.currentView )
                // this.currentView.remove();
                this.currentView = new View( {el: $( 'body' ), id: id} );
        }

        } );
                return AppRouter;
        } );
