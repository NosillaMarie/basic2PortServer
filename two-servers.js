var http = require('http');

http.createServer(onRequest_a).listen(7000);
http.createServer(onRequest_b).listen(7500);

function onRequest_a(request, response) {
    response.write("You are so pretty");
    response.end();
}

function onRequest_b(request, response) {
    response.write("You are so Ugly!");
    response.end();
}



