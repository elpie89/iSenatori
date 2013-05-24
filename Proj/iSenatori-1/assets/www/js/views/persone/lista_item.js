define( ["zepto", "underscore", "backbone", "handlebars", "text!tpl/persona_list_item_tpl.html"],
        function( $, _, Backbone, Handlebars, template ) {

           var SingSenatore = Backbone.View.extend( {
              tagName: "li",
              events: {
                 'touchend img': 'detail'
              },
              template: Handlebars.compile( template ),
              initialize: function( ) {
                 this.render( );
              },
              render: function( ) {
                 $( this.el ).html( this.template( this.model ) );
                 return this;
              },
              detail: function(e) {  
         console.log("press");
               e.preventDefault();
                 Backbone.history.navigate( "persone/" + this.model.objectId, {trigger: true} );
              }


           } );
           return SingSenatore;
        } );