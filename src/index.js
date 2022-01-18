var http = require("http");
//Requiring http
//To make Node.js act as an HTTP server

//create a server object:
const server = http.createServer((req, res) => {
  res.write("Hello World!"); //write a response to the client
  res.end(); //end the response
});
server.listen(8080); //the server object listens on port 8080
/*server.listen(port, hostname, backlog, callback);
Parameter Values Parameter	Description
port	          Optional.
Specifies the port we want to listen to
hostname	      Optional. 
Specifies the IP address we want to listen to
backlog         Optional. 
Specifies the max length of the queue of pending connections. 
callback      	Optional. 
Specifies a function to be executed when the listener has been added
*/

//Node.js has a set of built-in modules.
//Node.js is an open source server environment
//Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
//Node.js uses JavaScript on the server

/* 
What Can Node.js Do?
-------------------
->Node.js can generate dynamic page content.
->Node.js can create, open, read, write, delete,
and close files on the server.
->Node.js can collect form data.
->Node.js can add, delete, modify data 
in your database.

What is a Node.js File?
----------------------
->Node.js files contain tasks that will
be executed on certain events.
->A typical event is someone trying to 
access a port on the server.
->Node.js files must be initiated on the server 
before having any effect
->Node.js files have extension ".js"
*/
