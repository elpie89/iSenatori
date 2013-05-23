define(["zepto", "underscore", "backbone", "handlebars","text!tpl/welcome_tpl.html"],
        function($, _, Backbone, Handlebars, template) {

           var Welcome = Backbone.View.extend({
              
              className: "content",
              tagName: "section",
              id:"content",
              
              template: Handlebars.compile(template),
              
              initialize: function() {
                 this.uiProperties={
                   top_bar : false,
                   nav_bar : false,
                   bottom_bar:false
                 },
                 this.render();
         
         setTimeout(function(){Backbone.history.navigate("persone", {trigger: true});},2000);
              },
              render: function() {
                 $(this.el).html(this.template({}));
                 return this;
              }
           });

           return Welcome;

        });