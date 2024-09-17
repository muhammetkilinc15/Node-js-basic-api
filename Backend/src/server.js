// src/server.js

var http = require('http');
var app = require('./app');
var dotenv = require('dotenv');


// Load environment variables
dotenv.config();

var PORT = process.env.PORT || 4000;

// Create server
var server = http.createServer(app);

// Start listening on the specified port
server.listen(PORT, function() {
    console.log('Server is running on port ' + PORT);
});
