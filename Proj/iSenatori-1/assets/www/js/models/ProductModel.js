define(["zepto", "underscore", "backbone"],
        function($, _, Backbone) {
           var ProductModel = Backbone.Model.extend({
              defaults: {
                 name: undefined,
                 price: 0,
                 more: undefined
              }
           });
           return ProductModel;
        });