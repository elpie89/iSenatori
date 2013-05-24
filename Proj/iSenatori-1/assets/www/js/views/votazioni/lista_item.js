define( ["zepto", "underscore", "backbone", "handlebars", "text!tpl/votazione_list_item_tpl.html"],
        function( $, _, Backbone, Handlebars, template ) {

           var SingVotazione = Backbone.View.extend( {
              tagName: "li",
              template: Handlebars.compile( template ),
              events: {
                 'touchend': 'detail'
              },
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
                 Backbone.history.navigate( "votazioni/" + this.model.objectId, {trigger: true} );
              }


           } );
           return SingVotazione;
        } );