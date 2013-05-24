define( ["zepto", "underscore", "backbone", "topbar/topbar","votazioni/votazioni","footer/footer"],
        function( $, _, Backbone, Head,List,Butt) {

           var Wrap = Backbone.View.extend( {
              initialize: function() {
                 this.render();
              },
              render: function() {
                $(this.el).removeClass('contentHome');
                 var h=new Head();
                 var l=new List();
                 var b=new Butt();
                 $(this.el).html(h.el);
                  $(this.el).append(l.el);
                 $(this.el).append(b.el);
                
                 return this;
              }
           } );

           return Wrap;

        } );