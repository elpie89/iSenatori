define( ["zepto", "underscore", "backbone", "handlebars", "text!tpl/footer_tpl.html"],
        function( $, _, Backbone, Handlebars, template ) {
           var TopBar = Backbone.View.extend( {
              tagName: "footer",
              template: Handlebars.compile( template ),
              events: {
                 "touchend #votazione": "goVotazioni",
                 "touchend #persone": "goPersone"
              },
              initialize: function() {
                 this.render();
              },
              render: function() {
                 $( this.el ).html( this.template() );
                 return this;
              },
              goVotazioni: function( e ) {
               
                 Backbone.history.navigate( "votazioni", {trigger: true} );
              },
              goPersone: function() {
                
                 Backbone.history.navigate( "persone", {trigger: true} );
              }


           } );

           return TopBar;

        } );