define( ["zepto", "underscore", "backbone", "topbar/topbar", "personeDetail/detail", "footer/footer"],
        function( $, _, Backbone, Head, Detail, Butt ) {

           function ok( data, status, xhr )
           {
              console.log( "query andata a buon fine" );
              var tmp = JSON.parse( data ).results;
              DB["senatore"] = tmp;
           }
           function nok( xhr, errorType, error )
           {
              console.log( "query non andata a buon fine" );
           }


           var Wrap = Backbone.View.extend( {
              
              initialize: function( ) {

                 this.render();
              },
              render: function() {
                 var h = new Head();
                 
                 var check=false;
                 for ( var i = 0; i < DB['senatori'].length && !check; i++ ) {
                    if ( DB["senatori"][i].objectId === this.options.id ){
                       var d = new Detail( {model: DB["senatori"][i]} );
                       check=true;
                    }
                 }
                 var b = new Butt();
                 $( this.el ).html( h.el );
                 $( this.el ).append( d.el );
                 $( this.el ).append( b.el );

                 return this;
              }
           } );

           return Wrap;

        } );