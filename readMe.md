Express - Web framework for node.js. It will help us create different routes thru our API
Postman - help us make different request thru our API's so that we can test all of our endpoints

Initialize backend javascript application
\$ npm init -y

create index.js
\$ npm i -s express

to use import statement
from node package.json after "main" add "type":"module",

Configure the Server

body-parser
Node.js body parsing middleware.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

\$ npm i -D nodemon -D = --save-dev
saved only as development dependency

on the browser Cannot Get / error

Explanation: Node and Express primarily are all about routing, so we need to create some routes which we can then visit with our browser or we can send request to

Create a folder routes

- name the routes with the name we are starting with
  ex. users.js

PUT vs PATCH Request
The main difference between the PUT and PATCH method is that the PUT method uses the request URI to supply a modified version of the requested resource which replaces the original version of the resource, whereas the PATCH method supplies a set of instructions to modify the resource.

restructure the folder
create controllers folder
place to put the callback parameters

- create file with the same name users.js
