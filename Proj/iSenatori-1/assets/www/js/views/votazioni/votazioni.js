define( ["zepto", "underscore", "backbone","votazioni/lista"],
        function( $, _, Backbone,List ) {

           var daList = Backbone.View.extend( {
              events: {
                 //'touchend': 'buttonPressed'
              },
              className: "content",
              tagName: "section",
              initialize: function() {
                 this.render();
              },
              render: function() {
                 var list = new List();
                 $( this.el ).html( list.el );
                 return this;
              },
              buttonPressed: function( e ) {
                 e.preventDefault();
                 console.log( "ehi you guyz! don't touch da butt! " + this.cid );
              }
           } );

           return daList;

        } );