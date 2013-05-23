define(["zepto", "underscore", "backbone", "models/ProductModel"],
    function ($, _, Backbone, ProductModel) {

    var ProductList = Backbone.Collection.extend({
        model: ProductModel
      });

    return ProductList;

  });