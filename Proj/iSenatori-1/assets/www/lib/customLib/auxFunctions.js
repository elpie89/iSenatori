define( function() {
   var jmt = {
      arePropertiesIncludedIn: function( obj ) {
         for ( var p in this ) {
            if(!obj.hasOwnProperty(p))
               return false;
         }
         return true;
      }
   };
   Object.prototype.jmt = jmt;
} );