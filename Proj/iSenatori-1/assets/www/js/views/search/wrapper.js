define( ["zepto", "underscore", "backbone", "topbar/TopBarView", "search/content"],
        function( $, _, Backbone, TopBarView, ContentView ) {

           var Wrap = Backbone.View.extend( {
              events: {
                 /* mappare gli eventi swipe tra le bacheche*/
              },
              initialize: function() {
                 this.render();
              },
              render: function() {
                try{
                   this.option.iuProperties
                }
                 var topbar = new TopBarView();
                 var cont = new ContentView();

                 $( this.el ).html( $( topbar.el ) );
                 $( this.el ).append( $( cont.el ) );

                 return this;
              }
           } );

           return Wrap;

        } );