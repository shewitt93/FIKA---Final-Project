const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3030 });
const wssTTT = new WebSocket.Server({ port: 3040 });
wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(data) {
    // const options = {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    // };
    // fetch("http://localhost:8000/core/message/", options).then((r) => r.json());
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);

        //   console.log(client.send(data))
      }
    });
  });
});
wssTTT.on("connection", function connection(ws) {
  console.log("someone connected to tictactoe");
});
