define(["zepto", "underscore", "backbone", "handlebars","text!tpl/top_bar_tpl.html"],
        function($, _, Backbone, Handlebars, template) {

           var TopBar = Backbone.View.extend({
              
              className: "top_bar",
              tagName: "section",
              id:"top_bar",
              
              template: Handlebars.compile(template),
              
              initialize: function() {
                 this.render();
              },
              render: function() {
                 $(this.el).html(this.template());
                 return this;
              }
             

           });

           return TopBar;

        });