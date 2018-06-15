var socket = new WebSocket("ws://echo.websocket.org");
   
socket.onopen = connectionOpen; 
socket.onmessage = messageReceived;

function connectionOpen() {
   socket.send("UserName:alexerohinzzz@gmail.com");
}

function messageReceived(e) {
	var messageLog = document.getElementById("messageLog");
    messageLog.innerHTML += "<br>" + "Ответ сервера: " + e.data;
}