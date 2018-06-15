var messageLog;
var timeDisplay;

window.onload = function() {  
  messageLog = document.getElementById("messageLog");
  timeDisplay = document.getElementById("timeDisplay");
}

function startListening() {
    source = new EventSource("server_events.aspx");
    source.onmessage = receiveMessage;
    messageLog.innerHTML += "<br>" + "Начинаем слушать сообщения."
  }
  
  function receiveMessage(event) {
    messageLog.innerHTML += "<br>" + event.data;
    timeDisplay.innerHTML = event.data;
  }


  function stopListening() {
    source.close();
    messageLog.innerHTML += "<br>" + "Больше не прослушивать сообщения."
  }