define( ["zepto", "underscore", "backbone", "persone/lista_item"],
        function( $, _, Backbone, Senatore ) {

           var daList = Backbone.View.extend( {
              tagName: "ul",
              className: "wall_sen",
              initialize: function() {
                 this.render();
              },
              render: function() {

                 for ( var i = 0; i < DB['senatori'].length; i++ ) {
                    var s = new Senatore( {model: DB['senatori'][i]} )
                    $( this.el ).append( s.el );
                 }

                 return this;
              }
           } );

           return daList;

        } );