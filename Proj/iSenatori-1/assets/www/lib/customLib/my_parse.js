define( ["zepto"],
        function( $ ) {

           var obj = {};

           obj.parse_get_class = function( q_class, ok, nok ) {
              $.ajax( {
                 type: 'GET',
                 url: "https://api.parse.com/1/classes/" + q_class,
                 headers: {
                    "X-Parse-Application-Id": "PBJUldQzY3U15seidANv5cIeC5YEw8ADILirRnz9",
                    "X-Parse-REST-API-Key": "6c61e2WECL9pUi58delJMGkJGP3UVwmLjwCF7PIe"
                 },
                 success: ok,
                 error: nok,
                 async: false
              } );
           };
           obj.parse_get_entry = function( q_id, q_class, ok, nok ) {
              $.ajax( {
                 type: 'GET',
                 url: "https://api.parse.com/1/classes/".concat( q_class != null ? q_class.
                         concat( q_id != null ? "/" + q_id : "" ) : "" ),
                 headers: {
                    "X-Parse-Application-Id": "PBJUldQzY3U15seidANv5cIeC5YEw8ADILirRnz9",
                    "X-Parse-REST-API-Key": "6c61e2WECL9pUi58delJMGkJGP3UVwmLjwCF7PIe"
                 },
                 success: ok,
                 error: nok,
                 async: false
              } );
           };

           return obj;
        } );