define( ["zepto", "underscore", "backbone", "handlebars", "text!tpl/votazione_detail.html"],
        function( $, _, Backbone, Handlebars, template ) {

           var SingVotazione = Backbone.View.extend( {
              
              template: Handlebars.compile( template ),
              initialize: function( ) {
                 this.render( );
              },
              render: function( ) {
                 $( this.el ).html( this.template( this.model ) );
                 return this;
              }
           } );
           return SingVotazione;
        } );