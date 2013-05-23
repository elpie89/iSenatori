define( ["zepto", "underscore", "backbone", "handlebars","wall/ProdListView", "topbar/TopBarView"],
        function( $, _, Backbone, Handlebars,ContentView, TopBarView ) {

           var Wrap = Backbone.View.extend( {
              events: {
                 /* mappare gli eventi swipe tra le bacheche*/
              },
             
              initialize: function() {
                 this.render();
              },
              render: function() {
                  
                 var topbar = new TopBarView();
                 var cont = new ContentView();
                 $(cont.el).addClass("container");
                 
                  $(this.el).html( $(topbar.el) );
                  $(this.el).append( $(cont.el) );

                 return this;
              }
           } );

           return Wrap;

        } );