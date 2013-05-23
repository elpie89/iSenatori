define( ["zepto", "underscore", "backbone", "handlebars", "text!tpl/search_tpl.html"],
        function( $, _, Backbone, Handlebars, template ) {

           var Content = Backbone.View.extend( {
              className: "container tmp_contaier",
              tagName: "section",
              template: Handlebars.compile( template ),
              initialize: function() {
                 this.render();
              },
              render: function() {
                 $( this.el ).html( this.template() );
                 return this;
              }
           } );

           return Content;

        } );








