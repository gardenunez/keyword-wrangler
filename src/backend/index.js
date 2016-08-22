'use strict';

var Server = require('./Server.js');

var server = Server('8080');

server.listen(function(){
    console.log('Server started and listening on port', port); 
});