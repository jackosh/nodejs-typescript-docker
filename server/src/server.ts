import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const clients = new Set();
const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const webSocketServer = new WebSocket.Server({ server });

// webSocketServer.getUniqueID = function () {
//     function s4() {
//         return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//     }
//     return s4() + s4() + '-' + s4();
// };

webSocketServer.on('connection', (webSocket: WebSocket, req: http.IncomingMessage) => {
    console.log('new connection!');
    console.log(req.headers['sec-websocket-key']);
    //send immediately a feedback to the incoming connection    
    webSocket.send('Hi there, I am a WebSocket server');

    //connection is up, let's add a simple simple event
    webSocket.on('message', (message: string) => {
        //log the received message and send it back to the client
        console.log('received: %s', message);
        let messageData = JSON.parse(message);
        if (messageData.type == 'username') {
            console.log('received username %s', messageData.message);
        }

        const broadcastRegex = /^broadcast\:/;

        console.log(broadcastRegex.test(message));

        if (broadcastRegex.test(message)) {
            console.log('broadcast!!!');
            message.replace(broadcastRegex, '');
            // webSocket.send(`Hello, broadcast message -> ${message}`);

            //send back the message to the other clients
            webSocketServer.clients
                .forEach(client => {
                    // console.log(client);
                    // if (client != webSocket) {
                    client.send(`Hello, broadcast message -> ${message}`);
                    // }
                });

        } else {
            webSocket.send(`Hello, you sent -> ${message}`);
        }

    });


});

// start our server
// ${server.address().port}
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port 8999  :)`);
});