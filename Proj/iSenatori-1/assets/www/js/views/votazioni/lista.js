define( ["zepto", "underscore", "backbone", "votazioni/lista_item"],
        function( $, _, Backbone, Votazione ) {

           var daList = Backbone.View.extend( {
              tagName: "ul",
              className: "wall_sen",
              initialize: function() {
                 this.render();
              },
              render: function() {

                 for ( var i = 0; i < DB['votazioni'].length; i++ ) {
                    var v = new Votazione( {model: DB['votazioni'][i]} );
                    $( this.el ).append( v.el );
                 }

                 return this;
              }
           } );

           return daList;

        } );