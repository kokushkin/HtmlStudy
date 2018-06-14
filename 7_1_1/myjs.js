var req = new XMLHttpRequest();

function askServer() {
    // Получаем введенные в форму числа
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    // Структурируем строку запроса
    var dataToSend = "?number1=" + number1 + "&number2=" + number2;

    req.open("GET", "WebCalculator.aspx" + dataToSend, true);

    req.onreadystatechange = handleServerResponse;
    req.send();

    document.getElementById("result").innerHTML = "Запрос отправлен на сервер.";
}

function handleServerResponse() {
    if ((req.readyState == 4) && (req.status == 200))
    {
      var result = req.responseText;
      document.getElementById("result").innerHTML = "Ответ сервера: " + result;
    }
  }