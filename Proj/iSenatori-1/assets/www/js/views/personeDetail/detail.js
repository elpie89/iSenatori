define( ["zepto", "underscore", "backbone", "handlebars", "text!tpl/persona_detail.html"],
        function( $, _, Backbone, Handlebars, template ) {

           var SingSenatore = Backbone.View.extend( {
              tagName: "section",
              id: "content",
              className: "content",
              template: Handlebars.compile( template ),
              initialize: function( ) {
                 this.render( );
              },
              render: function( ) {
                 $( this.el ).html( this.template( this.model ) );
                 return this;
              }


           } );
           return SingSenatore;
        } );