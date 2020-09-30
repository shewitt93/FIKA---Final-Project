const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3030 });
const wssTTT = new WebSocket.Server({ port: 3040 });
const wssGameChat = new WebSocket.Server({ port: 3041 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});

wssTTT.on("connection", function connection(ws) {
  console.log("someone connected to tictactoe");
  ws.on("message", function incoming(data) {
  
      console.log(JSON.parse(data))
      
    wssTTT.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data)
        console.log('sent')
      }
       
          
      
    });
  });
});
wssGameChat.on("connection", function connection(ws) {
  ws.on('message', function incoming(data) {
    wssGameChat.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data)
      }
    })
  })
})

