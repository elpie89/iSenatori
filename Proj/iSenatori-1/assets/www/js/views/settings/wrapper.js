define( ["zepto", "underscore", "backbone", "topbar/TopBarView", "settings/content"],
        function( $, _, Backbone, TopBarView, ContentView ) {

           var Wrap = Backbone.View.extend( {
              events: {
                 /* mappare gli eventi swipe tra le bacheche*/
              },
              initialize: function() {
                 this.render();
              },
              render: function() {

                 if ( this.el.firstChild.id !== "top_bar" ) {
                    var topbar = new TopBarView();
                    $( this.el ).html( $( topbar.el ) );
                 }
                 else
                    $( this.el ).html( $( '#top_bar' ) );

                 var cont = new ContentView();
                 $( this.el ).append( $( cont.el ) );

                 return this;
              }
           } );

           return Wrap;

        } );