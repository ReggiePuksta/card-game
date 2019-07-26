## Web card game

#### This project is currently in development and is not functional.

Card game has 2 separate parts: server and front-end.
    + Server - used to assign differnt users for the battle. Maintain and validate the data.
    Communicate with user's browser through WebSockets.
    + Front-end - Single page application that relies on JavaScript to refresh views according
    to the server data. 

At the moment this repository only includes front-end code, while the server is gonna be include in the later stages of the development. The main focus of this game is to create a simple, structured, extendible and modular codebase while implementing MVC GUI pattern. 

Tools that we include:
    + Webpack and NPM scrips for building our application.
    + Jest for Unit and Integration tests.
    + Socket.IO for fast connection between two users.
