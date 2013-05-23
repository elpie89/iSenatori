/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var req = new XMLHttpRequest();
req.open("POST", "https://api.parse.com/1/classes/myModel", true);
req.setRequestHeader("X-Parse-Application-Id", "a9xtCsXpwupwATltoqQUQpYCLHfEK0jbJfSFTcA0");
req.setRequestHeader("X-Parse-REST-API-Key", "DWX2nFA75Jg0oGmrH4Q7ZUk1OPxZKaoMLuUaG72k");
req.setRequestHeader("Content-Type", "application/json");
req.send(JSON.stringify({name: "Luca", role: "Grafico/Strafico"}));