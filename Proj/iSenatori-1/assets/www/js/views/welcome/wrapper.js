define( ["zepto", "underscore", "backbone", "handlebars", "text!tpl/welcome_tpl.html", "my_parse"],
        function( $, _, Backbone, Handlebars, template, myParse ) {

           function ok( data, status, xhr )
           {
              console.log( "query andata a buon fine" );
              var tmp = JSON.parse( data ).results;
              if ( tmp.length < 10 )
                 DB["votazioni"] = tmp;
              else
                 DB["senatori"] = tmp;
           }
           function nok( xhr, errorType, error )
           {
              console.log( "query non andata a buon fine" );
           }


           var Welcome = Backbone.View.extend( {
              tagName: "section",
              className: "container",
               template: Handlebars.compile( template ),
              initialize: function() {
                 
                  myParse.parse_get_class( "Senatore", ok, nok );
                  myParse.parse_get_class( "Votazione", ok, nok );
                 
                 this.render();
              },
              render: function() {
                 
                 $( this.el ).html();
                 return this;
              }
           } );

           return Welcome;

        } );